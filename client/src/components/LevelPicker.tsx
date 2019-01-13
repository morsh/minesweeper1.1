import * as React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions';
import { SelectField } from 'react-md';
import { GameLevel } from 'src/@types/enums';

const LevelPicker = ({ game, dispatch }: any) => {
  const onLevelChange = (value: string) => {
    dispatch(startGame(value as IGameLevel));
  };

  return (
    <SelectField
      id="select-field-1"
      label="Game Level"
      placeholder="Placeholder"
      className="md-cell"
      style={{ width: '100%' }}
      value={game.level}
      menuItems={Object.keys(GameLevel)}
      onChange={onLevelChange}
    />
  );
};

const mapStateToProps = (state: any) => ({
  game: state.game
});

export default connect(mapStateToProps)(LevelPicker);
