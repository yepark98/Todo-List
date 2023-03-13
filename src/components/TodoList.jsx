import React from "react";
import { useRecoilState } from "recoil";

import { todosState } from "./../atom/index";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoListItem key={index} idx={index} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
