/* @flow */

import React, { Component } from "react";

type Props = {};
type State = { current: Date };

export class Timer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      current: new Date(),
    };
  }

  componentDidMount() {
    // this *this* means additional fiels on this(lol) class.
    this.intervalID = setInterval(() => {
      this.setState({
        current: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const dateAndTime: Date = this.state.current;
    return (
      <div className="timer-wrapper">
        {dateAndTime.toLocaleDateString() +
          " " +
          dateAndTime.toLocaleTimeString()}
      </div>
    );
  }
}
