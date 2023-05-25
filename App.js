import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: "harshavardhan",
  };
  render() {
    return (
      <div>
        <h2> java script{this.state.name}</h2>
      </div>
    );
  }
}
