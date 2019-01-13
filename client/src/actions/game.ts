import { initializeBoard } from './board';
import { Dispatch } from 'redux';
import { GameActionType } from 'src/@types/enums';

export const startGame = (level: IGameLevel) => (
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
