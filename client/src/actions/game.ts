import { GameActionType, GameLevel, IDispatchState } from 'src/reducers/minesweeper/types';
import { initializeBoard } from './board';
import { Dispatch } from 'redux';

export const startGame = (level: GameLevel) => (
  dispatch: Dispatch<any>,
  getState: () => IDispatchState
) => {
  dispatch({ type: GameActionType.START, level });
  dispatch(initializeBoard(level));
};

export const stopGame = (status: string) => ({
  type: GameActionType.STOP,
  status
});
