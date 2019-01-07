import * as React from 'react';
import { connect } from 'react-redux';
import { IGameState } from 'src/reducers/minesweeper/types';

interface IProps {
  game?: IGameState;
}

class BoardView extends React.Component<IProps> {
  render() {

    if (!this.props.game) { return null; }

    return (
      <div>
        Game Status: <span>{this.props.game.status}</span>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  game: state.game
});

export default connect(
  mapStateToProps
)(BoardView);
