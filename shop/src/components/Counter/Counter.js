import React, { Component } from "react";
import classes from "./Counter.module.css";

class Counter extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <h1>Counter</h1>
        <div className={classes.Count}>0</div>
        <div>
          <button>-</button>
          <button>0</button>
          <button>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;