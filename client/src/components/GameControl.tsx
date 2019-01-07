import * as React from 'react';
import GameState from './GameState';
import LevelPicker from './LevelPicker';
import ResetGame from './ResetGame';

const GameControl = ({ dispatch }: any) => {
  return (
    <div className="md-grid">
      <div className="md-cell md-cell--4">
        <LevelPicker />
      </div>
      <div className="md-cell md-cell--4">
        <ResetGame />
      </div>
      <div className="md-cell md-cell--4">
        <GameState />
      </div>
    </div>
  );
};

export default GameControl;
