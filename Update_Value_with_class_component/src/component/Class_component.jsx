import React, { Component } from "react";

class Class_component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: 1,
    };
  }

  My_useState = () => {
    this.setState({ myData: this.state.myData + 1 });
  };

  render() {
    return (
      <>
        <h1>{this.state.myData}</h1>
        <button onClick={this.My_useState}>Click</button>
      </>
    );
  }
}

export default Class_component;
