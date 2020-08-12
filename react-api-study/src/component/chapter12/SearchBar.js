/* @flow */
import React, { Component } from "react";

type Props = {};
type State = {};

export class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <label>
          <input type="checkbox" />
          Only show products in stock
        </label>
      </form>
    );
  }
}
