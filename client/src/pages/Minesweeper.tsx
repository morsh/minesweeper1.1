import * as React from 'react';
import { Card, CardTitle, CardText } from 'react-md';

export default class Minesweeper extends React.Component {
  render() {
    return (
      <div className="md-grid md-text-container">
        <h2 className="md-cell md-cell--12">
          Minesweeper
        </h2>
        <Card className="md-cell md-cell--12">
          <CardTitle title="Lets play a game..." />
          <CardText>
            <div>
              
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}
