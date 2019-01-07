import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import game from './minesweeper/game';
import board from './minesweeper/board';

export default combineReducers({
  todos,
  visibilityFilter,
  game,
  board
});