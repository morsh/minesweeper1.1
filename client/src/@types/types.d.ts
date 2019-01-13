declare type IGameLevel = 'Easy' | 'Beginner' | 'Intermediate' | 'Advanced';

declare type IGameStatus = 'Not Started' | 'Running' | 'Success' | 'Fail';

declare type IGameActionType = 'START' | 'STOP' | 'SAVE_GAME' | 'LOAD_GAME';

declare type IBoardActionType = 'INITIALIZE' | 'CLICK_CELL' | 'RIGHT_CLICK_CELL';

declare type IFieldElement = 'Empty' | 'Mine' | 'Number';

declare interface IDispatchState {
  board: IBoardState;
  game: IGameState;
  toastsStore: IToastsState;
}

declare type IGameAction =
  | {
      type: 'START';
      level: IGameLevel;
    }
  | {
      type: 'STOP';
      status: IGameStatus;
    }
  | {
      type: 'LOAD_GAME';
      board: IBoardState;
      game: IGameState;
    };

declare interface IGameState {
  level: IGameLevel;
  startTime: Date;
  endTime?: Date;
  status: IGameStatus;
}

declare interface IBoardState {
  mineRevealed: boolean;
  isGameFinished: boolean;
  dimension: number;
  boardData: IField[][];
}

declare type IBoardAction =
  | {
      type: 'INITALIZE';
      mineRevealed: boolean;
      dimension: number;
      boardData: BoardData;
    }
  | {
      type: 'CLICK_CELL' | 'RIGHT_CLICK_CELL';
      x: number;
      y: number;
      state: IBoardState;
    } | {
      type: 'LOAD_GAME';
      game: IGameState;
      board: IBoardState;
    };

declare type BoardData = IField[][];

declare interface IField {
  x: number;
  y: number;
  flagged: boolean;
  revealed: boolean;
  mine: boolean;
  mineCount: number;
  empty: boolean;
}