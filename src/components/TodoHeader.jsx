import React from "react";
import { useRecoilState } from "recoil";
import styles from "./TodoHeader.module.css";

import { todosState } from "../atom";

const TodoHeader = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const uncheckedTodos = todos.filter((todo) => todo.checked === false);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>TODO LIST</h1>
      <h2 className={styles.today}>
        오늘의 할 일 :{" "}
        <mark className={styles.todayCount}>{uncheckedTodos.length}</mark>
      </h2>
    </header>
  );
};

export default TodoHeader;
