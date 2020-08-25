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
        <ul className={classes.TodoList}>
          <li>
            <div>{props.content}</div>
            <div className={classes.Due}>
              <strong>Due: {duedate}</strong>
            </div>
            <button onClick={props.click}>Delete</button>
          </li>
        </ul>
      </Aux>
    );
  } else {
    return <OverDueList content={props.content} time={props.time} />;
  }
};

export default todoList;
