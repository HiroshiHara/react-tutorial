/* @flow */
import React, { Component } from "react";

type Props = { product: Object };
type State = {};

export class ProductRow extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );
    const price = product.price;
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }
}
