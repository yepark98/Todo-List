import React from "react";
import { useRecoilState } from "recoil";

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
    <li style={{ display: "flex" }}>
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={handleChangeChecked}
      />
      <p>{todo.text}</p>
      <button onClick={handleClickRemove}>삭제</button>
    </li>
  );
};

export default TodoListItem;
