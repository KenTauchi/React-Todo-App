import React from "react";
import Aux from "../../hoc/Aux";

const layout = (props) => (
  <Aux>
    <header>Todo List with Timer</header>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
