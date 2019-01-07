import * as React from 'react';
import { Card, CardTitle, CardText } from 'react-md';
import BoardView from 'src/components/BoardView';
import LevelPicker from 'src/components/LevelPicker';
import GameState from 'src/components/GameState';

export default class Minesweeper extends React.Component {
  render() {
    
    return (
      <div className="md-grid">
        <h2 className="md-cell md-cell--12">
          Minesweeper
        </h2>
        <Card className="md-cell md-cell--12">
          <CardTitle title="Lets play a game..." />
          <CardText>
            <div>
              <LevelPicker />
              <GameState />
              <BoardView />
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}
