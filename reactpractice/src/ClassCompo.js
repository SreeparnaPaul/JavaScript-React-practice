import React, { Component } from "react";
import Question from "./Question";

export default class ClassCompo extends Component {
  constructor() {
    super();
    this.state = {
      name: "sree",
      array: [1, 2, 3, 4, 5],
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        {this.state.array.map((item) => {
          return item * 2;
        })}
        <Question />
      </div>
    );
  }
}
