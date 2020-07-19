/* @flow */

import React, { Component } from "react";

export const method = (str: string) => {
  console.log(`Hello, ${str}!`);
};

export class Form extends Component {
  render() {
    // const value: string = "test";
    return (
      <form>
        <input type="text"></input>
      </form>
    );
  }
}
