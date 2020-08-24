import React, { Component } from "react";

import "./App.css";
import Layout from "./components/Layout/Layout";
import TodoBuilder from "./container/TodoBuilder/TodoBuilder";

class App extends Component {
  render() {
    return (
      <Layout>
        <TodoBuilder />
      </Layout>
    );
  }
}

export default App;
