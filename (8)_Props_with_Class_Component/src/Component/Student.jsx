import React from "react";
export default class Student extends React.Component {
  render() {
    return (
      <>
        <div>Sudent: {this.props.name}</div>
        <div>Number: {this.props.number}</div>
      </>
    );
  }
}
