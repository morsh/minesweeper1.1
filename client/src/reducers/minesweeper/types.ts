export enum GameLevel {
  Easy,
  Beginner,
  Intermediate,
  Advanced
}

export enum GameStatus {
  NotStarted,
  Running,
  Success,
  Fail
}

export interface IGameAction {
  type: string;
  level: GameLevel;
}

export interface IGameState {
  level: GameLevel;
  startTime: Date;
  endTime?: Date;
  status: GameStatus;
}

export interface IBoardState {
  dimension: number;
  boardData: IField[][];
}

export enum BoardActionType {
  INITALIZE,
  PLANT_MINES
}

export type IBoardAction = {
  type: BoardActionType.INITALIZE;
  level: GameLevel;
} | {
  type: BoardActionType.PLANT_MINES;
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

  isMine(): boolean;

  setFlagged(flagged: boolean): void;
  setRevealed(revealed: boolean): void;
  setMine(mine: boolean): void;
  setEmpty(empty: boolean): void;
  setText(text: string): void;
  setMineCount(count: number): void;
}