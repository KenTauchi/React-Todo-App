import React from "react";
import classes from "./OverDueList.module.css";

const overDueList = (props) => {
  return (
    <li className={classes.OverDueList}>
      <div className={classes.Alert}>*Overdue</div>
      <div className={classes.Due}>Due: {props.time}</div>
      <div className={classes.Content}>{props.content}</div>

      <button onClick={props.click}>Delete</button>
    </li>
  );
};

export default overDueList;
