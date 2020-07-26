/* @flow */

import React, { Component } from "react";

export const method = (str: string) => {
  console.log(`Hello, ${str}!`);
};

type Props = {};

type State = {};

export class Form extends Component<Props, State> {
  render() {
    // const value: string = "test";
    return (
      <div className="wrapper">
        <form>
          <input type="text"></input>
        </form>
      </div>
    );
  }
}
