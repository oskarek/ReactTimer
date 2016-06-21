var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var CountdownStatus = {
  STOPPED: 1,
  PAUSED: 2,
  STARTED: 3
};

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: CountdownStatus.STOPPED
    };
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case CountdownStatus.STARTED:
          this.startTimer();
          break;
        default:

      }
    }
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({count: newCount > 0 ? newCount : 0});
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: CountdownStatus.STARTED
    });
  },
  render: function () {
    var {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = {
  Countdown: Countdown,
  CountdownStatus: CountdownStatus
};
