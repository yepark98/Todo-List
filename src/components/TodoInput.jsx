import React, { useRef } from "react";
import { useRecoilState } from "recoil";

import { textState, todosState } from "./../atom/index";

const TodoInput = () => {
  const [text, setText] = useRecoilState(textState);
  const [todos, setTodos] = useRecoilState(todosState);

  const no = useRef(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      return;
    }
    setTodos([...todos, { id: no.current++, text: text, checked: false }]);

    setText("");
  };

  console.log(todos);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>
    </section>
  );
};

export default TodoInput;
