/* @flow */
import React, { Component } from "react";

type Props = { category: string };
type State = {};

export class ProductCategory extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}
