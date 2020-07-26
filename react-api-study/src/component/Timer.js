/* @flow */

import React, { Component } from "react";

type Props = {};
type State = { current: string };

let intervalID = null;

export class Timer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      current: this.loadCurrentTime(),
    };
  }

  componentDidMount() {
    intervalID = setInterval(() => {
      this.setState({
        current: this.loadCurrentTime(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(intervalID);
  }

  loadCurrentTime(): string {
    const date: Date = new Date();
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }

  render() {
    return <div className="timer-wrapper">{this.state.current}</div>;
  }
}
