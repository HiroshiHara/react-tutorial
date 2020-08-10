/* @flow */

import React, { Component } from "react";
import { ListItem } from "./ListItem";

type Props = { lists: Array<String> };
type State = {};

export class Lists extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const lists: Array<String> = this.props.lists;
    const listItems: Object = lists.map((item) => (
      <ListItem key={Math.random() * 100} value={item} />
    ));
    return <ul>{listItems}</ul>;
  }

  /**
   * Incorrect using keys on list.
   * keys should be remained on not "<li>" but Component itself.
   */
  // render() {
  //   const lists: Array<String> = this.props.lists;
  //   const listItems: Object = lists.map((item, index) => (
  //     <li key={index}>{item}</li>
  //   ));
  //   return <ul>{listItems}</ul>;
  // }
}
