import React, { Component } from "react";
import { Button as Btn } from "native-base";
import { styles } from "./styles";

export class Button extends Component {
  render() {
    return (
      <Btn {...styles.button} {...this.props}></Btn>
    );
  }
}