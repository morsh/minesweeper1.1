import { IGameState, IGameAction, GameStatus, GameLevel } from './types';

const initialState = {
  level: GameLevel.Beginner,
  startTime: new Date(),
  status: GameStatus.Running
};

const game = (state: IGameState = initialState, action: IGameAction): IGameState => {
  
  switch (action.type) {
    case 'START':
      return {
        level: action.level,
        startTime: new Date(),
        status: GameStatus.Running
      };
    case 'STOP':
      return {
        level: state.level,
        startTime: state.startTime,
        endTime: new Date(),
        status: GameStatus.Fail
      };
    case 'START_TIMER':
    case 'RESET_TIMER':
    case 'STOP_TIMER':
    case 'REVEAL':
    default:
      return state;
  }
};

export default game;