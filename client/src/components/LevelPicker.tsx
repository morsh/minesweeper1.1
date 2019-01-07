import * as React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions';
import { GameLevel } from 'src/reducers/minesweeper/types';
import { SelectField } from 'react-md';

const LevelPicker = ({ dispatch }: any) => {
  const onLevelChange = (value: string) => {
    dispatch(startGame(value as GameLevel));
  };

  return (
    <SelectField
      id="select-field-1"
      label="Game Level"
      placeholder="Placeholder"
      className="md-cell"
      menuItems={Object.keys(GameLevel)}
      onChange={onLevelChange}
    />
  );
};

export default connect()(LevelPicker);
