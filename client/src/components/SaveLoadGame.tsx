import * as React from 'react';
import { connect } from 'react-redux';
import { saveGame, loadGame } from '../actions';
import { Button } from 'react-md';

const SaveLoadGame = ({ dispatch }: any) => {

  const onSaveClick = () => {
    dispatch(saveGame());
  };

  const onLoadClick = () => {
    dispatch(loadGame());
  };

  return (
    <span className="md-cell">
      <Button flat={true} id="btn-save" onClick={onSaveClick}>Save</Button>
      <Button flat={true} id="btn-load" onClick={onLoadClick}>Load</Button>
    </span>
  );
};

export default connect()(SaveLoadGame);
