import React from "react";
import classes from "./InputForm.module.css";

const inputForm = (props) => (
  <form className={classes.InputForm} onSubmit={props.click}>
    <span>Todo Description</span>
    <textarea name="desc" type="text" />
    <span>Due Date</span>
    <input type="datetime-local" />
    <button type="submit">Add</button>
  </form>
);

export default inputForm;
