/* @flow */

import React, { Component } from "react";

type Props = { defaultCount: number };
type State = { currentCount: number };

export class Counter extends Component<Props, State> {
  static defaultProps = {
    defaultCount: 0,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      currentCount: this.props.defaultCount,
    };
  }

  incrementCount(e: event) {
    e.preventDefault();
    this.setState({
      currentCount: this.state.currentCount + 1,
    });
  }

  render() {
    return (
      <div className="counter-wrapper">
        <div onClick={this.incrementCount.bind(this)}>
          {this.state.currentCount}
        </div>
      </div>
    );
  }
}
