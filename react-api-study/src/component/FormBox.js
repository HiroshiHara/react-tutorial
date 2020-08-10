/* @flow */

import React, { Component } from "react";
import { Counter } from "./Counter";
import { Timer } from "./Timer";
import { NameForm } from "./NameForm";

type Props = { nameDefVal: ?string };
type State = {};

export class FormBox extends Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="formbox-wrapper">
        <Timer />
        <Counter />
        <NameForm defaultValue={""} />
      </div>
    );
  }
}
