import * as React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions';
import { GameLevel, IDispatchState } from 'src/reducers/minesweeper/types';
import { Button } from 'react-md';

const ResetGame = ({ level, onStartGame }: any) => {
  
  const onResetClick = (e: React.MouseEvent) => {
    onStartGame(level);
  };

  return (
    <Button flat={true} onClick={onResetClick}>
      Reset Game
    </Button>
  );
};

const mapStateToProps = (state: IDispatchState) => ({
  board: state.board,
  game: state.game,
  level: (state.game && state.game.level) || null
});

const mapDispatchToProps = (dispatch: any) => ({
  onStartGame: (level: GameLevel) => dispatch(startGame(level))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetGame);
