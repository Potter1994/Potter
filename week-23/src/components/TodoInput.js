import React, { useState } from "react";
import { addTodo } from "../actions";
import { useDispatch, useSelector } from "react-redux";

function TodoInput() {
  const [input, setInput] = useState("");
  const handleChangeInputValue = (e) => {
    setInput(e.target.value);
  };
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        onKeyPress={(e) =>
          e.key === "Enter" ? dispatch(addTodo(input), setInput("")) : ""
        }
        onChange={(e) => handleChangeInputValue(e)}
        value={input}
        placeholder="Add todo..."
      />
      <button onClick={() => dispatch(addTodo(input), setInput(""))}>
        Add todo
      </button>
    </>
  );
}

export default TodoInput;
