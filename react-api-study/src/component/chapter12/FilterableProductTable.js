/* @flow */
import React, { Component } from "react";
import { SearchBar } from "./SearchBar";
import { ProductTable } from "./ProductTable";

type Props = {
  data: Array<Object>,
};
type State = {
  filterText: string,
  isStockOnly: Boolean,
};

export class FilterableProductTable extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      filterText: "",
      isStockOnly: false,
    };
  }

  handleFilterText(event: Event) {
    this.setState({
      filterText: event.target.value,
    });
  }

  handleIsStockOnly(event: Event) {
    this.setState({
      isStockOnly: event.target.checked,
    });
  }

  render() {
    const filterText = this.state.filterText;
    const isStockOnly = this.state.isStockOnly;
    return (
      <div className="table-wrapper">
        <SearchBar
          filterText={filterText}
          isStockOnly={isStockOnly}
          onChangeFilterText={this.handleFilterText.bind(this)}
          onChangeIsStockOnly={this.handleIsStockOnly.bind(this)}
        />
        <ProductTable
          data={this.props.data}
          filterText={filterText}
          isStockOnly={isStockOnly}
        />
      </div>
    );
  }
}
