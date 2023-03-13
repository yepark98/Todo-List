import React from "react";

import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <>
      <TodoHeader />
      <TodoInput />
      <TodoList />
    </>
  );
};

export default Todo;
