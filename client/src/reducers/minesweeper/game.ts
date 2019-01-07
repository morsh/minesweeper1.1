import {
  IGameState,
  IGameAction,
  GameStatus,
  GameLevel,
  GameActionType
} from './types';

const initialState = {
  level: GameLevel.Easy,
  startTime: new Date(),
  status: GameStatus.NotStarted
};

const game = (
  state: IGameState = initialState,
  action: IGameAction
): IGameState => {
  switch (action.type) {
    case GameActionType.START:
      return {
        level: action.level,
        startTime: new Date(),
        status: GameStatus.Running
      };
    case GameActionType.STOP:
      return {
        level: state.level,
        startTime: state.startTime,
        endTime: new Date(),
        status: action.status
      };
    default:
      return state;
  }
};

export default game;
