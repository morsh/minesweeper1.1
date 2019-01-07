export enum GameLevel {
  Easy = 'Easy',
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced'
}

export enum GameStatus {
  NotStarted = 'Not Started',
  Running = 'Running',
  Success = 'Success',
  Fail = 'Fail'
}

export enum GameActionType {
  START = 'START',
  STOP = 'STOP'
}

export interface IDispatchState {
  board: IBoardState;
  game: IGameState;
}

export type IGameAction =
  | {
      type: GameActionType.START;
      level: GameLevel;
    }
  | {
      type: GameActionType.STOP;
      status: GameStatus;
    };

export interface IGameState {
  level: GameLevel;
  startTime: Date;
  endTime?: Date;
  status: GameStatus;
}

export interface IBoardState {
  mineRevealed: boolean;
  isGameFinished: boolean;
  dimension: number;
  boardData: IField[][];
}

export enum BoardActionType {
  INITALIZE = 'INITIALIZE',
  CLICK_CELL = 'CLICK_CELL',
  RIGHT_CLICK_CELL = 'RIGHT_CLICK_CELL'
}

export type IBoardAction =
  | {
      type: BoardActionType.INITALIZE;
      mineRevealed: boolean;
      dimension: number;
      boardData: BoardData;
    }
  | {
      type: BoardActionType.CLICK_CELL | BoardActionType.RIGHT_CLICK_CELL;
      x: number;
      y: number;
      state: IBoardState;
    };

export type BoardData = IField[][];

export enum FieldElement {
  Empty,
  Mine,
  Number
}

export interface IField {
  x: number;
  y: number;
  flagged: boolean;
  revealed: boolean;

  readonly mine: boolean;
  readonly mineCount: number;
  readonly empty: boolean;

  setMine(mine: boolean): void;
  setMineCount(mineCount: number): void;
  setEmpty(empty: boolean): void;
}
