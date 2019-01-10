import { combineReducers } from 'redux';
import game from './minesweeper/game';
import board from './minesweeper/board';

export default combineReducers({
  game,
  board
});