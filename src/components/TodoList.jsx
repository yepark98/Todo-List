import React from "react";
import { useRecoilState } from "recoil";
import styles from "./TodoList.module.css";

import { todosState } from "./../atom/index";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  return (
    <ul className={styles.todoList}>
      {todos.map((todo, index) => (
        <TodoListItem key={index} idx={index} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
