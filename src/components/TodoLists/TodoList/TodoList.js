import React from "react";
import Aux from "../../../hoc/Aux";

const todoList = (props) => (
  <Aux>
    <li>{props.content}</li>
    <button onClick={props.click}>Delete</button>
  </Aux>
);

export default todoList;
