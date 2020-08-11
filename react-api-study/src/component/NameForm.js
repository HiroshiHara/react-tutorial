/* @flow */

import React, { Component } from "react";

type Props = { defaultValue?: string };
type State = { value?: string };

export class NameForm extends Component<Props, State> {
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
      alert("A name was submitted: " + this.state.value);
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
