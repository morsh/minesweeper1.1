import {
  GameActionType,
  GameLevel
} from 'src/reducers/minesweeper/types';
import { initializeBoard } from './board';

export const startGame = (level: GameLevel) => (
  dispatch: any,
  getState: () => any
) => {
  dispatch({ type: GameActionType.START, level });
  dispatch(initializeBoard(level));
};

export const stopGame = (status: string) => ({
  type: GameActionType.STOP,
  status
});
