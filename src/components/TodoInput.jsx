import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import styles from "./TodoInput.module.css";

import { textState, todosState } from "./../atom/index";

const TodoInput = () => {
  const [text, setText] = useRecoilState(textState);
  const [todos, setTodos] = useRecoilState(todosState);

  const no = useRef(1); // //할 일(item)의 고유 id가 될 숫자

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
    <section className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.inputArea}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.input}
        />
        <button
          type="submit"
          className={
            !text
              ? `${styles.button} ${styles.deactivationButton}`
              : styles.button
          }
        >
          추가
        </button>
      </form>
    </section>
  );
};

export default TodoInput;
