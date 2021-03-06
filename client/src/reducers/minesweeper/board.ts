import {
  IBoardState,
  IBoardAction,
  BoardActionType,
} from './types';

const initialState: IBoardState = {
  mineRevealed: false,
  isGameFinished: false,
  dimension: 0,
  boardData: []
};

const board = (state: IBoardState = initialState, action: IBoardAction): IBoardState => {
  switch (action.type) {
    case BoardActionType.INITALIZE:
      return {
        mineRevealed: false,
        isGameFinished: false,
        dimension: action.dimension,
        boardData: action.boardData
      };
    case BoardActionType.CLICK_CELL:
      return {
        mineRevealed: action.state.mineRevealed,
        isGameFinished: action.state.isGameFinished,
        dimension: action.state.dimension,
        boardData: action.state.boardData
      };

    default:
      return state;
  }
};

export default board;
