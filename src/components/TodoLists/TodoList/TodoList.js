import React from "react";
import classes from "./TodoList.module.css";

const todoList = (props) => (
  <ul className={classes.TodoList}>
    <li>
      <div>{props.content}</div>
      <button onClick={props.click}>Delete</button>
    </li>
  </ul>
);

export default todoList;
