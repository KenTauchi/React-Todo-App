import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import InputForm from "../../components/InputForm/InputForm";
import TodoList from "../../components/TodoLists/TodoList/TodoList";

class TodoBuilder extends Component {
  state = {
    todos: [],
    overdue: [],
  };

  componentDidMount = () => {
    const dataExist = localStorage.getItem("todo");
    // const overDueExist = localStorage.getItem("overdue");
    const storage = JSON.parse(localStorage.getItem("todo"));
    const overDueStorage = JSON.parse(localStorage.getItem("overdue"));

    if (dataExist) {
      this.setState({ todos: storage, overdue: overDueStorage });
    }
  };

  addToOverdueStorage = (newState) => {
    localStorage.setItem("overdue", JSON.stringify(newState));
  };

  addToList = (event) => {
    event.preventDefault();
    const newValue = event.target.desc.value;
    const newDue = event.target.datetime.value;
    this.setState(
      (prevState) => ({
        todos: [...prevState.todos, { todo: newValue, time: newDue }],
      }),
      () => {
        this.addToStorage(this.state.todos);
      }
    );
  };

  addToStorage = (newState) => {
    localStorage.setItem("todo", JSON.stringify(newState));
  };

  deleteTodo = (index) => {
    const newList = [...this.state.todos];
    newList.splice(index, 1);
    this.setState({ todos: newList });
    localStorage.setItem("todo", JSON.stringify(newList));
  };

  render() {
    return (
      <Aux>
        <InputForm click={this.addToList} />
        <hr />
        {this.state.todos.map((list, index) => (
          <TodoList
            content={list.todo}
            time={list.time}
            id={index}
            click={() => {
              this.deleteTodo(index);
            }}
          />
        ))}
      </Aux>
    );
  }
}

export default TodoBuilder;
