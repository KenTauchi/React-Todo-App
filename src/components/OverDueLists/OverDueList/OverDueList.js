import React from "react";
import classes from "./OverDueList.module.css";

const overDueList = (props) => {
  const dueRawDate = new Date(props.time).toLocaleString();
  const length = dueRawDate.length;
  const dueDate =
    dueRawDate.substring(0, length - 6) +
    dueRawDate.substring(length - 3, length);

  return (
    <ul className={classes.OverDueList}>
      <li>
        <div>{props.content}</div>
        <div>
          <strong>Due: {dueDate}</strong>
        </div>
        <button>Delete</button>
      </li>
    </ul>
  );
};

export default overDueList;
