import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor child");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps child");
    return currentState;
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate child");
    return true;
  }

  render() {
    console.log("render child");
    return <div>Child</div>;
  }

  componentDidMount() {
    console.log("componentDidMount child");
  }
}
