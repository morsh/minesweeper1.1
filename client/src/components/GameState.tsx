import * as React from 'react';
import { connect } from 'react-redux';
import { IGameState, GameStatus } from 'src/reducers/minesweeper/types';
import { Chip } from 'react-md';
import * as moment from 'moment';

interface IProps {
  game?: IGameState;
}

interface IState {
  duration: string;
}

class BoardView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      duration: ''
    };
  }

  componentDidMount() {

    // Making sure the seconds displayed in the duration label are updated every second
    // In the format of 0m 0s
    setInterval(
      () => {
        if (!this.props.game) {
          return;
        }

        const { game } = this.props;

        let durationDiff: moment.Duration | null;
        switch (game.status) {
          case GameStatus.Running:
            durationDiff = moment.duration(
              moment(new Date()).diff(game.startTime)
            );
            break;

          case GameStatus.Success:
          case GameStatus.Fail:
            durationDiff = moment.duration(
              moment(game.endTime || new Date()).diff(game.startTime)
            );
            break;

          default:
            durationDiff = null;
        }

        let duration = '';
        if (durationDiff) {
          duration = ' ';
          if (durationDiff.minutes()) {
            duration += durationDiff.minutes() + 'm ';
          }
          duration += durationDiff.seconds() + 's';
        }

        this.setState({ duration });
      },
      1000
    );
  }

  render() {
    if (!this.props.game) {
      return null;
    }

    const { game } = this.props;

    const className =
      game.status === GameStatus.Fail
        ? 'fail'
        : game.status === GameStatus.Success
        ? 'success'
        : '';

    return (
      <span className={className}>
        <h5>
          <span>Game State: </span>
          <Chip label={this.props.game.status + this.state.duration} />
        </h5>
      </span>
    );
  }
}

const mapStateToProps = (state: any) => ({
  game: state.game
});

export default connect(mapStateToProps)(BoardView);
