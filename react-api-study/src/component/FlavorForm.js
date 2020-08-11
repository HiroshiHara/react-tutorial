/* @flow */

import React, { Component } from "react";

type Props = { defaultValue: ?string };
type State = { value: ?string };

export class FlavorForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: this.props.defaultValue,
    };
  }

  handleChange(event: Event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event: Event) {
    if (this.state.value) {
      alert("A favorite flavor is: " + this.state.value);
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Pick your favorite flavor:
          <select
            value={this.state.value}
            multiple={false}
            onChange={this.handleChange.bind(this)}
          >
            <option value="grapefruit">GrapeFruit</option>
            <option value="lime">Lime</option>
            <option value="apple">Apple</option>
            <option value="orange">Orange</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
