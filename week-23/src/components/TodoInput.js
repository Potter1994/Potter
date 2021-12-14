import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions";

function TodoInput() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        onKeyPress={(e) =>
          e.key === "Enter" ? dispatch(addTodo(input), setInput("")) : ""
        }
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
      />
      <button onClick={() => dispatch(addTodo(input), setInput(""))}>
        Add Todo
      </button>
      <div>
        <button
          style={{ color: "red", marginTop: 10 }}
          onClick={() => dispatch(removeTodo())}
        >
          REMOVE ALL
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
