import {
  BoardActionType,
  GameLevel,
  IBoardState,
  BoardData,
  IField,
  GameStatus,
  IDispatchState
} from 'src/reducers/minesweeper/types';
import { Field } from 'src/reducers/minesweeper/field';
import { stopGame } from './game';
import { Dispatch } from 'redux';

export const initializeBoard = (level: GameLevel) => (
  dispatch: Dispatch,
  getState: () => IDispatchState
) => {
  const state = getState().board;
  state.dimension = getDimensionsFromGameLevel(level);
  dispatch({
    type: BoardActionType.INITALIZE,
    mineRevealed: false,
    dimension: state.dimension,
    boardData: initializeBoardData(state)
  });
};

export const clickBoardCell = (x: number, y: number) => (
  dispatch: Dispatch,
  getState: () => IDispatchState
) => {
  const state = clickCell(getState().board, x, y);

  dispatch({
    type: BoardActionType.CLICK_CELL,
    x,
    y,
    state
  });

  if (state.isGameFinished) {
    const finishState = state.mineRevealed
      ? GameStatus.Fail
      : GameStatus.Success;
    dispatch(stopGame(finishState));
  }
};

export const rightClickBoardCell = (x: number, y: number) => (
  dispatch: Dispatch,
  getState: () => IDispatchState
) => {
  const state = getState().board;
  state.boardData = rightClickCell(state.boardData, x, y);

  dispatch({
    type: BoardActionType.CLICK_CELL,
    x,
    y,
    state
  });
};

function getDimensionsFromGameLevel(level: GameLevel): number {
  switch (level) {
    case GameLevel.Easy:
      return 9;
    case GameLevel.Beginner:
      return 16;
    case GameLevel.Intermediate:
      return 25;
    case GameLevel.Advanced:
      return 36;
    default:
      return 0;
  }
}

function initializeBoardData(state: IBoardState): BoardData {
  const boardData: BoardData = [];

  for (let i = 0; i < state.dimension; i++) {
    boardData[i] = [];

    for (let j = 0; j < state.dimension; j++) {
      boardData[i][j] = new Field(i, j);
    }
  }

  state.boardData = boardData;
  return plantMines(state);
}

function plantMines(state: IBoardState): BoardData {
  let minesPlanted: number = 0;
  let x: number;
  let y: number;

  const mines = Math.round(state.dimension % 10);

  const getRandomNumber = (max: number) =>
    Math.floor(Math.random() * 1000 + 1) % max;

  while (minesPlanted < mines) {
    x = getRandomNumber(state.dimension);
    y = getRandomNumber(state.dimension);

    if (!state.boardData[x][y].mine) {
      state.boardData[x][y].setMine(true);
      minesPlanted++;
    }
  }

  return calculateDistance(state);
}

function calculateDistance(state: IBoardState): BoardData {
  for (let i = 0; i < state.dimension; i++) {
    for (let j = 0; j < state.dimension; j++) {
      const field = state.boardData[i][j];

      if (!field.mine) {
        const mines = traverseBoard(state, field, (f: IField) => !!f.mine);

        if (mines.length > 0) {
          field.setMineCount(mines.length);
        } else {
          field.setEmpty(true);
        }
      }
    }
  }

  return state.boardData;
}

function traverseBoard(
  state: IBoardState,
  fromField: IField,
  condition?: (field: IField) => boolean
): IField[] {
  const result: IField[] = [];

  condition = condition || (() => true);
  const { boardData, dimension } = state;

  // traverse up
  if (fromField.x > 0) {
    result.push(boardData[fromField.x - 1][fromField.y]);
  }

  // traverse down
  if (fromField.x < dimension - 1) {
    result.push(boardData[fromField.x + 1][fromField.y]);
  }

  // traverse left
  if (fromField.y > 0) {
    result.push(boardData[fromField.x][fromField.y - 1]);
  }

  // traverse right
  if (fromField.y < dimension - 1) {
    result.push(boardData[fromField.x][fromField.y + 1]);
  }

  // traverse upper left
  if (fromField.x > 0 && fromField.y > 0) {
    result.push(boardData[fromField.x - 1][fromField.y - 1]);
  }

  // traverse lower left
  if (fromField.x < dimension - 1 && fromField.y > 0) {
    result.push(boardData[fromField.x + 1][fromField.y - 1]);
  }

  // traverse upper right
  if (fromField.x > 0 && fromField.y < dimension - 1) {
    result.push(boardData[fromField.x - 1][fromField.y + 1]);
  }

  // traverse lower right
  if (fromField.x < dimension - 1 && fromField.y < dimension - 1) {
    result.push(boardData[fromField.x + 1][fromField.y + 1]);
  }

  return result.filter(condition);
}

function revealBoard(state: IBoardState): IBoardState {
  state.boardData.forEach(row => {
    row.forEach(f => (f.revealed = true));
  });

  return state;
}

function reveal(state: IBoardState, field: IField, auto: boolean): IBoardState {
  // do not reveal flagged and revealed fields in auto mode
  if (field.flagged || (auto && field.revealed)) {
    return state;
  }

  if (field.mine) {
    revealBoard(state);
    state.isGameFinished = true;
    state.mineRevealed = true;
    // this.eventGameOver.trigger();
  } else if (field.revealed && !auto) {
    const flagged = traverseBoard(state, field, f => f.flagged);

    if (field.mineCount === flagged.length) {
      traverseBoard(state, field, f => !f.revealed && !f.flagged).forEach(f =>
        reveal(state, f, true)
      );
    }
  } else {
    field.revealed = true;
    field.flagged = false;

    // auto reveal
    if (field.mineCount === 0) {
      traverseBoard(state, field).forEach(f => reveal(state, f, true));
    }

    if (isGameOver(state.boardData)) {
      state.isGameFinished = true;
      // this.eventWin.trigger();
    }
  }

  return state;
}

function isGameOver(boardData: BoardData) {
  let unrevealedCount = 0;
  let mineCount = 0;

  boardData.forEach(row => {
    row.filter(f => !f.revealed).forEach(f => unrevealedCount++);
    row.filter(f => f.mine).forEach(f => mineCount++);
  });

  return unrevealedCount === mineCount;
}

function clickCell(state: IBoardState, x: number, y: number): IBoardState {
  // boardData[x][y].
  return reveal(state, state.boardData[x][y], true);
}

function rightClickCell(boardData: BoardData, x: number, y: number): BoardData {
  const field = boardData[x][y];

  if (!field.revealed) {
    field.flagged = !field.flagged;
  }

  return boardData;
}
