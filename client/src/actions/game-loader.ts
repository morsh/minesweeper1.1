import { Dispatch } from 'redux';
import * as request from 'xhr-request';
import { GameActionType } from 'src/@types/enums';
import { showToast } from './toasts';

export const saveGame = () => (
  dispatch: Dispatch<any>,
  getState: () => IDispatchState
) => {
  const state = getState();
  const { board, game } = state;

  // call /api/save with game + board
  request(
    '/api/save', 
    {
      method: 'POST',
      json: true,
      body: { board, game }
    },
    (err: any) => {
      if (err) { throw err; }
      dispatch(showToast('Game was saved successfully'));
    }
  );
};

interface ILoadGameState {
  game: IGameState;
  board: IBoardState;
}

const loadGameToStores = ({ game, board }: ILoadGameState) => ({
  type: GameActionType.LOAD,
  game,
  board
});

export const loadGame = () => (
  dispatch: Dispatch<any>
) => {
  // call /api/load
  request(
    '/api/load', 
    {
      method: 'GET',
      json: true
    },
    (err: any, data: any) => {
      if (err) { throw err; }
      
      // Validating expected data exists in the returned data structure
      if (!data || !data.game || !data.board || !data.board.boardData) {
        const errMsg = 'data structure doesn\'t contain the expected data format { game: {}, board: { boardData: {} }}';
        throw new Error(`${errMsg}:\n${data}`);
      }

      if (!Array.isArray(data.board.boardData)) {
        const errMsg = `boardData is not an array:\n${data.board.boardData}`;
        throw new Error(`${errMsg}:\n${data.board.boardData}`);
      }

      const loadedData: {
        game: IGameState,
        board: IBoardState
      } = {
        game: data.game,
        board: data.board
      };

      dispatch(loadGameToStores(loadedData));
      dispatch(showToast('Game loaded successfully'));
    }
  );

  // dispach type action with returned values
};