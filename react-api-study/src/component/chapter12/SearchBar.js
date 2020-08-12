/* @flow */
import React, { Component } from "react";

type Props = {
  filterText: string,
  isStockOnly: Boolean,
  onChangeFilterText: Function,
  onChangeIsStockOnly: Function,
};
type State = {};

export class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const filterText = this.props.filterText;
    const isStockOnly = this.props.isStockOnly;
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={this.props.onChangeFilterText.bind(this)}
        />
        <label>
          <p>
            <input
              type="checkbox"
              checked={isStockOnly}
              onChange={this.props.onChangeIsStockOnly.bind(this)}
            />
            Only show products in stock
          </p>
        </label>
      </form>
    );
  }
}
