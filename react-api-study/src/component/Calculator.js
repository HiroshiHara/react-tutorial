/* @flow */

import React, { Component } from "react";
import { TemperatureInput } from "./TemperatureInput";
import { BoilingVerdict } from "./BoilingVerdict";

type Props = {};
type State = { temperature?: string, scale: string };

export class Calculator extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      temperature: "",
      scale: "c",
    };
  }

  handleCelsiusChange(temperature: string) {
    this.setState({
      temperature: temperature,
      scale: "c",
    });
  }

  handleFahrenheitChange(temperature: string) {
    this.setState({
      temperature: temperature,
      scale: "f",
    });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f"
        ? this.tryConvert(temperature, this.toCelsius)
        : temperature;
    const fahrenheit =
      scale === "c"
        ? this.tryConvert(temperature, this.toFahrenheit)
        : temperature;
    return (
      <div className="calclator-wrapper">
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange.bind(this)}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange.bind(this)}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }

  toCelsius(fahrenheit: number): number {
    return ((fahrenheit - 32) * 5) / 9;
  }

  toFahrenheit(celsius: number): number {
    return (celsius * 9) / 5 + 32;
  }

  tryConvert(temperature: string, converter: Function): string {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = converter(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
}
