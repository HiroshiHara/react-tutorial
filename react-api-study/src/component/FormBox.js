/* @flow */

import React, { Component } from "react";
import { Counter } from "./Counter";
import { Timer } from "./Timer";
import { NameForm } from "./NameForm";
import { EssayForm } from "./EssayForm";
import { FlavorForm } from "./FlavorForm";

type Props = { nameDefVal?: string };
type State = {};

export class FormBox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="formbox-wrapper">
        <Timer />
        <Counter />
        <NameForm defaultValue={""} />
        <EssayForm
          defaultValue={
            "Please write an essay about your favorite DOM element."
          }
        />
        <FlavorForm defaultValue={"orange"} />
      </div>
    );
  }
}
