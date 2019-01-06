import { IBoardState, IBoardAction, BoardActionType, GameLevel, IField, BoardData } from './types';
import { Field } from './field';

const initialState: IBoardState = {
  dimension: 0,
  boardData: []
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

function initializeBoardData(dimension: number): BoardData {
  const boardData: BoardData = [];

  for (let i = 0; i < dimension; i++) {
    boardData[i] = [];

    for (let j = 0; j < dimension; j++) {
      boardData[i][j] = new Field(i, j);
    }
  }

  return boardData;
}

function plantMines(boardData: BoardData, dimension: number): BoardData {
  let minesPlanted: number = 0;
  let x: number;
  let y: number;
  
  const mines = Math.round(dimension % 10);

  const getRandomNumber = (max: number) => Math.floor((Math.random() * 1000) + 1) % max;

  while (minesPlanted < mines) {
      x = getRandomNumber(dimension);
      y = getRandomNumber(dimension);

      if (!boardData[x][y].isMine()) {
          boardData[x][y].setMine(true);
          minesPlanted++;
      }
  }

  return calculateDistance(boardData, dimension);
}

function calculateDistance(boardData: BoardData, dimension: number): BoardData {

  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      const field = boardData[i][j];

      if (!field.isMine) {
        const mines = traverseBoard(
          boardData,
          dimension,
          field, 
          (f: IField) => !!f.isMine
        );

        if (mines.length > 0) {
          field.setMineCount(mines.length);
        } else {
          field.setEmpty(true);
        }
      }
    }
  }

  return boardData;
}

function traverseBoard(boardData: BoardData, dimension: number, fromField: IField, condition: any): IField[] {
  const result: IField[] = [];

  condition = condition || (() => true);

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

const board = (state: IBoardState = initialState, action: IBoardAction): IBoardState => {
  
  switch (action.type) {
    case BoardActionType.INITALIZE:
      const dimension = getDimensionsFromGameLevel(action.level);
      return {
        dimension,
        boardData: initializeBoardData(dimension)
      };
    case BoardActionType.PLANT_MINES:
      return {
        dimension: state.dimension,
        boardData: plantMines(state.boardData, state.dimension) 
      };
    default:
      return state;
  }
};

export default board;