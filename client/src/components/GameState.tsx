import * as React from 'react';
import { connect } from 'react-redux';
import { IGameState, GameStatus } from 'src/reducers/minesweeper/types';

interface IProps {
  game?: IGameState;
}

class BoardView extends React.Component<IProps> {
  render() {
    if (!this.props.game) {
      return null;
    }

    const className = 
      this.props.game.status === GameStatus.Fail ? 'fail' :
      this.props.game.status === GameStatus.Success ? 'success' : '';

    return (
      <span className={className}>
        Game Status: <span>{this.props.game.status}</span>
      </span>
    );
  }
}

const mapStateToProps = (state: any) => ({
  game: state.game
});

export default connect(mapStateToProps)(BoardView);
