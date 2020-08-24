import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import InputForm from "../../components/InputForm/InputForm";
import TodoList from "../../components/TodoLists/TodoList/TodoList";
import OverDueLists from "../../components/OverDueLists/OverDueLists";

class TodoBuilder extends Component {
  state = {
    todos: [],
  };

  addToList = (event) => {
    event.preventDefault();
    const newValue = event.target.desc.value;
    this.setState((prevState) => ({
      todos: [...prevState.todos, { todo: newValue }],
    }));
  };

  deleteTodo = (index) => {
    const newList = [...this.state.todos];
    newList.splice(index, 1);
    this.setState({ todos: newList });
  };

  render() {
    return (
      <Aux>
        <InputForm click={this.addToList} />

        <hr />
        {this.state.todos.map((list, index) => (
          <TodoList
            content={list.todo}
            key={index}
            click={() => {
              this.deleteTodo(index);
            }}
          />
        ))}

        <OverDueLists />
      </Aux>
    );
  }
}

export default TodoBuilder;
