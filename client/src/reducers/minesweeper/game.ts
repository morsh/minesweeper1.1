import { GameLevel, GameActionType, GameStatus } from 'src/@types/enums';

const initialState = {
  level: GameLevel.Easy,
  startTime: new Date(),
  status: GameStatus.NotStarted
};

const game = (state: IGameState = initialState, action: IGameAction): IGameState => {
  switch (action.type) {
    case GameActionType.START:
      return {
        level: action.level,
        startTime: new Date(),
        status: GameStatus.Running
      };

    case GameActionType.STOP:
      return {
        ...state,
        endTime: new Date(),
        status: action.status
      };

    case GameActionType.LOAD:
      return action.game;

    default:
      return state;
  }
};

export default game;
