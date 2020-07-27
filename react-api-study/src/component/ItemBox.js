/* @flow */

import React, { Component } from "react";
import { Counter } from "./Counter";
import { Timer } from "./Timer";

type Props = {};
type State = {};

export class ItemBox extends Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="itembox-wrapper">
        <Timer />
        <Counter />
      </div>
    );
  }
}
