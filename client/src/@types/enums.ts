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
  STOP = 'STOP',
  SAVE = 'SAVE_GAME',
  LOAD = 'LOAD_GAME'
}

export enum BoardActionType {
  INITALIZE = 'INITALIZE',
  CLICK_CELL = 'CLICK_CELL',
  RIGHT_CLICK_CELL = 'RIGHT_CLICK_CELL'
}

export enum FieldElement {
  Empty,
  Mine,
  Number
}

export enum ToastAction {
  Show = 'SHOW_TOAST',
  Dismiss = 'DISMISS_TOAST'
}

export interface IGameState2 {
  level: IGameLevel;
  startTime: Date;
  endTime?: Date;
  status: IGameStatus;
}