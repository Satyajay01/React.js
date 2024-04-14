import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", this.state.count);
    return true; // return by default false;
  }

  render() {
    return (
      <div>
        <h1>should Component Update {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          {" "}
          Update Counter
        </button>
      </div>
    );
  }
}

export default App;
