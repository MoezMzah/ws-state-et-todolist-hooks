import React, { Component } from "react";
// import Counter from './Counter.js'
export default class Counter2 extends Component {
  constructor() {
    console.log("constructor");

    super();
    this.state = {
      counter: 0,
      timer: 0,
      interval: 0,
    };
  }
  componentDidMount() {
    console.log("Component did mount");

    this.setState({
      interval: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      ),
    });
  }
  componentDidUpdate() {
    console.log("Component did Update ");
  }
  componentWillUnmount() {
    console.log("Component will Unmount");
    clearInterval(this.state.interval);
  }
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };
  reset = () => {
    this.setState({ counter: 0 });
  };
  render() {
    console.log("render");
    return (
      <div>
        <h1>COUNTER (STATEFUL COMPONENT)</h1>
        <button className="decrement-btn" onClick={this.decrement}>
          -
        </button>
        <span>{this.state.counter}</span>
        <button className="increment-btn" onClick={this.increment}>
          +
        </button>
        <br />
        <button className="reset-btn" onClick={this.reset}>
          Reset
        </button>
        <br />
        <p>{this.state.timer}</p>
      </div>
    );
  }
}
