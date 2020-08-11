/* @flow */

import React, { Component } from "react";
import { Counter } from "./Counter";
import { Timer } from "./Timer";
import { Lists } from "./Lists";

type Props = { lists: Array<string> };
type State = {};

export class ItemBox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const lists: Array<string> = this.props.lists;
    return (
      <div className="itembox-wrapper">
        <Timer />
        <Counter />
        <Lists lists={lists} />
      </div>
    );
  }
}
