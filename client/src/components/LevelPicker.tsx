import * as React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions';
import { GameLevel } from 'src/reducers/minesweeper/types';

const LevelPicker = ({ dispatch }: any) => {

  const onLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target) {
      dispatch(startGame(e.target.value as GameLevel));
    }
  };

  return (
    <div>
      <select onChange={onLevelChange}>
        {
          Object.keys(GameLevel).map(level => <option key={level} value={level}>{level}</option>)
        }
      </select>
    </div>
  );
};

export default connect()(LevelPicker);