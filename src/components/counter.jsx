import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 1
  };

  render() {
    return (
      <React.Fragment>
        <span>{this.state.count}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}
