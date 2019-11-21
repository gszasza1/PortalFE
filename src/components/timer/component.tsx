import './design.scss';

import React from 'react';

interface TimerProps {
  onStop?: Function;
  onStart?: Function;
  initialTime?: number;
  checkpoints?: Checkpoint[];
  endTime?: Function;
  onReset?: Function;
  data?: any;
  shouldFireEvent: boolean;
}
interface State {
  count: number;
  currentClass: number;
}
export class CountDown extends React.Component<TimerProps, State> {
  constructor(props: TimerProps) {
    super(props);
    this.state = {
      count: this.props.initialTime ? this.props.initialTime : 60,
      currentClass: -1
    };
  }

  componentDidUpdate(prevProps: TimerProps) {
    if (this.props.data !== prevProps.data) {
      this.handleStop();
      console.log(this.props.data);
      this.setState(
        {
          count: this.props.initialTime ? this.props.initialTime : 60,
          currentClass: -1
        },
        () => this.handleStart()
      );
    }
    if (this.state.count <= 0) {
      this.handleStop();
      if (this.props.endTime && this.props.shouldFireEvent === true) {
        this.props.endTime();
      }
    }
  }

  handleStart() {
    console.log("started");
    setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  }

  handleStop() {
    clearInterval();
    this.setState({ currentClass: -1 });
  }

  render() {
    return (
      <div className={`timer ${cssClasses[this.state.currentClass]}`}>
        {this.state.count}
      </div>
    );
  }
}

const cssClasses = ["green", "yellow", "red"];

interface Checkpoint {
  time: number;
  callback: () => any;
}
