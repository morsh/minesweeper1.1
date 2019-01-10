import * as React from 'react';

import './home.css';
import { Card, CardText } from 'react-md';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Card className="md-block-centered">
          <CardText>
            <h2>Instructions for MineSweeper</h2>

            <p><b>Quick Start:</b></p>

            <ul>
              <li>You are presented with a board of squares.
                Some squares contain mines (bombs), others don't.
                If you click on a square containing a bomb, you
        lose. If you manage to click all the squares (without clicking on any bombs) you win.</li>
              <li>Clicking a square which doesn't have a bomb
                  reveals the number of neighbouring squares
                  containing bombs. Use this information plus some guess work
        to avoid the bombs.</li>
              <li>To open a square, point at the square and click on it. To
        mark a square you think is a bomb, point and right-click (or hover with the mouse and press Space).</li>
            </ul>

            <p><b>Detailed Instructions:</b></p>

            <ul>
              <li>A squares "neighbours" are the squares adjacent
                  above, below, left, right, and all 4 diagonals. Squares
                  on the sides of the board or in a corner have fewer
        neighbors. The board does not wrap around the edges.</li>
              <li>If you open a square with 0 neighboring bombs, all its
                  neighbors will automatically open. This can cause a
        large area to automatically open.</li>
              <li>To remove a bomb marker from a square, point at it and
        right-click again.</li>
              <li>The first square you open is never a bomb.</li>
              <li>If you mark a bomb incorrectly, you will have to correct
                  the mistake before you can win. Incorrect bomb marking
                  doesn't kill you, but it can lead to mistakes
        which do.</li>
              <li>You don't have to mark all the bombs to win; you just need to
        open all non-bomb squares.</li>
              <li>Right-clicking twice will give you a question mark symbol which 
                can be useful if you are unsure about a square</li>
              <li>Click the yellow happy face to start a new game.</li>
            </ul>

            <p><b>Status Information:</b></p>

            <ul>
              <li>The upper left corner contains the number
                  of bombs left to find. The
        number will update as you mark and unmark squares.</li>
              <li>The upper right corner contains a time
                  counter. The timer will max out at 999
        (16 minutes 39 seconds).</li>
              <li>Click on the time to switch to the number of moves counter.
        Click again to switch back to the time.</li>
            </ul>

            <p><b>Options and Enhancements:</b></p>

            <ul>
              <li><b>Learning Mode</b> -
                  Show the contents of all unopened cells.
                  Scores do not count towards high scores, and the
                  Opening Move option does not apply.
        </li>
              <li><b>Opening Move</b> -
                  Not only will the first square never be
        a bomb, but neither will any of the neighbors.</li>
              <li><b>Marks (?)</b> -
                  Right clicking on a marked bomb will change the flag into
                  a question mark. Right clicking again will change
        it back into an unmarked square.</li>
              <li><b>Area Open</b> -
                  If an open square has the correct number of marked
                  neighboring bombs, click on the open square to open all
                  remaining unopened neighbor squares all at once.
                  If an incorrect number of neighbors are marked,
                  or all neighbors are marked or open, clicking the
                  square has no effect.
                  If an incorrect neighbor is marked,
        this will cause instant death.</li>
              <li><b>Open Remaining</b> -
                  Once the correct number of bombs have been marked, the
                  bomb counter will turn blue. Click on the blue bomb
                  counter to open all remaining cells. If any bombs
                  are incorrectly marked, this will cause
        instant death.</li>

            </ul>

          </CardText>
        </Card>
      </div>
    );
  }
}
