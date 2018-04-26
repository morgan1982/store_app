import React from "react";
import classes from './input.css'


const Input = props => (
  <div>
    <input
      className={classes.input}
      placeholder="amount"
      onChange={props.handleInput}
      value={props.input_val}
    />
    <label htmlFor="input" className={classes.input_label}>
      hello
    </label>
  </div>
);

export default Input;
