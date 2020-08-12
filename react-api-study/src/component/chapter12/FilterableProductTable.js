/* @flow */
import React, { Component } from "react";
import { SearchBar } from "SearchBar";
import { ProductTable } from "ProductTable";

type Props = {
  data: Array<Object>,
};
type State = {};

export class FilterableProductTable extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable data={this.props.data} />
      </div>
    );
  }
}
