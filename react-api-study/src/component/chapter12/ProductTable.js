/* @flow */
import React, { Component } from "react";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";

type Props = { data: Array<Object> };
type State = {};

export class ProductTable extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const rows = [];
    let lastCategory = null;
    this.props.data.forEach((row) => {
      if (row.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow category={row.category} key={row.category} />
        );
      }
      rows.push(<ProductRow product={row} key={row.name} />);
      lastCategory = row.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
