import { combineReducers } from 'redux';
import game from './minesweeper/game';
import board from './minesweeper/board';
import toastsStore from './toasts';

export default combineReducers({
  game,
  board,
  toastsStore
});