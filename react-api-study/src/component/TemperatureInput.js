/* @flow */

import React, { Component } from "react";

type Props = {
  scale: string,
  temperature: number,
  onTemperatureChange: Function,
};
type State = {};
const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

export class TemperatureInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  handleChange(event: Event) {
    this.props.onTemperatureChange(event.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange.bind(this)} />
      </fieldset>
    );
  }
}
