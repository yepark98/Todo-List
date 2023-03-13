import React from "react";
import { useRecoilState } from "recoil";
import { todosState } from "../atom";

const TodoHeader = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const uncheckedTodos = todos.filter((todo) => todo.checked === false);

  return (
    <div>
      <h1>오늘의 할 일 : {uncheckedTodos.length}</h1>
    </div>
  );
};

export default TodoHeader;
