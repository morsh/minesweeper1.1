import * as React from 'react';
import GameState from './GameState';
import LevelPicker from './LevelPicker';
import ResetGame from './ResetGame';
import SaveLoadGame from './SaveLoadGame';

const GameControl = ({ dispatch }: any) => {
  return (
    <div>
      <div className="md-grid">
        <div className="md-cell md-cell--2">
          <LevelPicker />
        </div>
        <div className="md-cell md-cell--2 ms-add-top-padding ms-game-state">
          <GameState />
        </div>
        <div className="md-cell md-cell--2 ms-add-top-padding ms-reset-game">
          <ResetGame />
        </div>
        <div className="md-cell md-cell--2 ms-add-top-padding ms-saveload-game">
          <SaveLoadGame />
        </div>
      </div>
    </div>
  );
};

export default GameControl;
