import * as React from 'react';
import { connect } from 'react-redux';
import { IBoardState, IField, GameLevel } from 'src/reducers/minesweeper/types';
import { FontIcon } from 'react-md';

import './board.css';
import { startGame, clickBoardCell, rightClickBoardCell } from 'src/actions';

interface IProps {
  board?: IBoardState;
  level?: GameLevel;
  initializeBoard?: any;
  clickBoardCell?: any;
  rightClickBoardCell?: any;
}

class BoardView extends React.Component<IProps> {
  componentDidMount() {
    if (!this.props.level) {
      return;
    }

    this.props.initializeBoard(this.props.level);
  }

  getFieldClass(field: IField): string {
    return [
      field.revealed ? 'revealed' : '',
      field.flagged ? 'flagged' : ''
    ].join(' ');
  }

  getFieldContent(field: IField): JSX.Element {
    return field.mine ? (
      <FontIcon>bug_report</FontIcon>
    ) : field.mineCount > 0 ? (
      <span>{field.mineCount.toString()}</span>
    ) : (
      <FontIcon>fiber_manual_record</FontIcon>
    );
  }

  onFieldClick(x: number, y: number, event: MouseEvent) {
    event.preventDefault();
    this.props.clickBoardCell(x, y);
  }

  onFieldRightClick(x: number, y: number, event: MouseEvent) {
    event.preventDefault();
    this.props.rightClickBoardCell(x, y);
  }

  render() {
    const board = this.props.board;

    if (!board) {
      return null;
    }

    const cells = board.boardData.map((row: IField[], ridx: number) => (
      <li key={ridx}>
        <ul>
          {row.map((field, cidx) => (
            <li
              key={cidx}
              className={this.getFieldClass(field)}
              unselectable="on"
              onSelectCapture={() => false}
              onClick={this.onFieldClick.bind(this, ridx, cidx)}
              onContextMenu={this.onFieldRightClick.bind(this, ridx, cidx)}
            >
              {this.getFieldContent(field)}
            </li>
          ))}
        </ul>
      </li>
    ));

    return <ul className="board">{cells}</ul>;
  }
}

const mapStateToProps = (state: any) => ({
  board: state.board,
  level: (state.game && state.game.level) || null
});

const mapDispatchToProps = (dispatch: any) => ({
  initializeBoard: (level: GameLevel) => dispatch(startGame(level)),
  clickBoardCell: (x: number, y: number) => dispatch(clickBoardCell(x, y)),
  rightClickBoardCell: (x: number, y: number) =>
    dispatch(rightClickBoardCell(x, y))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardView);
