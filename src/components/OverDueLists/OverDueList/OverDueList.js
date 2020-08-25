import React from "react";
import classes from "./OverDueList.module.css";

const overDueList = (props) => {
  return (
    <ul className={classes.OverDueList}>
      <li>
        <div>{props.content}</div>
        <div>
          <strong>Due: {props.time}</strong>
        </div>
        <button onClick={props.click}>Delete</button>
      </li>
    </ul>
  );
};

export default overDueList;
