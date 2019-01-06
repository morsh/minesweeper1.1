import * as React from 'react';
import { IBoardState, IField } from 'src/reducers/minesweeper/types';

interface IProps {
  board: IBoardState;
}

export default class BoardView extends React.Component<IProps> {
  render() {

    const { board } = this.props;

    const cells = board.boardData.map((row: IField[], ridx: number) => (
      <li key={ridx}>
        <ul>
          {row.map((cell, cidx) => <div key={cidx}>{cell.isEmpty ? '' : ''}</div>)}
        </ul>
      </li>
    ));

    return (
      <ul>
        {cells}
      </ul>
    );
  }
}