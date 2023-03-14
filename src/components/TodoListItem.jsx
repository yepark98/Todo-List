import React from "react";
import { useRecoilState } from "recoil";
import styles from "./TodoListItem.module.css";

import { todosState } from "./../atom/index";

const TodoListItem = (props) => {
  const [todos, setTodos] = useRecoilState(todosState);

  const { todo, idx } = props;

  const handleChangeChecked = (e) => {
    const copiedTodos = [...todos];
    copiedTodos.splice(idx, 1, { ...todo, checked: e.target.checked });
    setTodos(copiedTodos);
  };

  const handleClickRemove = () => {
    const copiedTodos = [...todos];
    copiedTodos.splice(idx, 1);
    setTodos(copiedTodos);
  };

  return (
    <li className={styles.todoListItem}>
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={handleChangeChecked}
      />
      <p
        className={styles.title}
        style={{
          color: todo.checked && "#c0c0c0",
          textDecoration: todo.checked && "line-through",
        }}
      >
        {todo.text}
      </p>
      <div>
        <button onClick={handleClickRemove} className={styles.button}>
          삭제
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
