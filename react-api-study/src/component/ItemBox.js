/* @flow */

import React, { Component } from "react";
import { Counter } from "./Counter";
import { Timer } from "./Timer";
import { Lists } from "./Lists";

type Props = { lists: Array<String> };
type State = {};

export class ItemBox extends Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    const lists: Array<String> = this.props.lists;
    return (
      <div className="itembox-wrapper">
        <Timer />
        <Counter />
        <Lists lists={lists} />
      </div>
    );
  }
}
