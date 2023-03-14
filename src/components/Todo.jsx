import React from "react";
import styles from "./Todo.module.css";

import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <section className={styles.container}>
      <TodoHeader />
      <TodoInput />
      <TodoList />
    </section>
  );
};

export default Todo;
