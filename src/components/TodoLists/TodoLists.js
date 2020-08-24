import React from "react";
import TodoList from "./TodoList/TodoList";

const todoLists = (props) => {
  props.lists.map((list, index) => {
    return (
      <TodoList
        content={list.todo}
        click={() => {
          props.delete(index);
        }}
      />
    );
  });
};

export default todoLists;
