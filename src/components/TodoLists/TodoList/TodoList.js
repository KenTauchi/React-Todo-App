import React from "react";
import classes from "./TodoList.module.css";
import OverDueList from "../../OverDueLists/OverDueList/OverDueList";
import Aux from "../../../hoc/Aux";

const todoList = (props) => {
  const dueRawDate = new Date(props.time).toLocaleString();
  const length = dueRawDate.length;
  const duedate =
    dueRawDate.substring(0, length - 6) +
    dueRawDate.substring(length - 3, length);

  const listTime = new Date(props.time).toLocaleString();
  const timeNow = new Date(new Date().toUTCString()).toLocaleString();
  const dueOver = listTime < timeNow;
  if (dueOver === false) {
    return (
      <Aux>
        <li className={classes.TodoList}>
          <div className={classes.Due}>Due: {duedate}</div>
          <div className={classes.Content}>{props.content}</div>

          <button onClick={props.click}>Delete</button>
        </li>
      </Aux>
    );
  } else {
    return (
      <OverDueList
        content={props.content}
        time={duedate}
        click={props.click}
        id={props.id}
      />
    );
  }
};

export default todoList;
