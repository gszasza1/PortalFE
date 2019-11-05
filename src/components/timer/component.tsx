import Timer from "react-compound-timer";
import React from "react";
import "./design.scss";
export class CountDown extends React.Component<TimerProps> {
  state = {
    time: this.props.initialTime ? this.props.initialTime : 30000,
    currentClass: -1
  };
  checkpointMaker = (): Checkpoint[] => {
    let checkpoints: Checkpoint[] = [];
    if (this.props.checkpoints) {
      checkpoints = checkpoints.concat(this.props.checkpoints);
    }
    if (this.props.endTime) {
      checkpoints.push({
        time: 10,
        callback: () => {
          this.props.endTime && this.props.endTime();
        }
      });
    }

    checkpoints.push({
      time: this.state.time / 2,
      callback: () => this.cssClass()
    });
    checkpoints.push({
      time: this.state.time / 4,
      callback: () => this.cssClass()
    });

    checkpoints.push({ time: 3000, callback: () => this.cssClass() });

    return checkpoints;
  };
  cssClass = () => {
    this.setState({ currentClass: this.state.currentClass + 1 });
  };
  render() {
    const { props } = this;
    return (
      <Timer
        initialTime={this.state.time}
        startImmediately
        checkpoints={this.checkpointMaker()}
        onStop={() => props.onStop && props.onStop()}
        onStart={() => props.onStart && props.onStart()}
        onReset={() => props.onReset && props.onReset()}
        direction="backward"
      >
        <div className={`timer ${cssClasses[this.state.currentClass]}`}>
          <Timer.Seconds />
        </div>
      </Timer>
    );
  }
}

const cssClasses = ["green", "yellow", "red"];

interface Checkpoint {
  time: number;
  callback: () => any;
}
interface TimerProps {
  onStop?: Function;
  onStart?: Function;
  initialTime?: number;
  checkpoints?: Checkpoint[];
  endTime?: Function;
  onReset?: Function;
}
