import React, { Component } from "react";
import Child from "./Child";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    console.log("constructor");
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return currentState;
  }

  render() {
    console.log("render");
    return (
      <div className="container">
        <h3>Parrent Component</h3>
        <p>Number: {this.state.number}</p>
        <button
          className="btn btn-primary mr-2"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
        <button
          className="btn btn-primary ml-2"
          onClick={() => {
            this.setState({
              number: this.state.number - 1,
            });
          }}
        >
          -
        </button>
        <div className="bg-dark text-white p-3">
          <Child />
        </div>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
}
