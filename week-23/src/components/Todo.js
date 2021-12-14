import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, changeDoneTodo } from "../actions";

function Todo() {
  const todos = useSelector((state) => state.todoReducer.todos);
  const changeTab = useSelector((state) => state.visibilityReducer);
  const dispatch = useDispatch();
  const tab = changeTab.filter;
  return (
    <>
      {todos &&
        todos
          .filter((i) => (tab === "undo" ? !i.isDone : true))
          .filter((i) => (tab === "complete" ? i.isDone : true))
          .map((i) => (
            <div
              key={i.id}
              style={{
                display: "flex",
                width: "400px",
                padding: 10,
                backgroundColor: "#eee",
                margin: "5px auto",
                justifyContent: "space-between",
              }}
            >
              <div>{i.textContent}</div>
              <div>
                <button
                  data-id={i.id}
                  onClick={() => dispatch(changeDoneTodo(i.id))}
                >
                  {i.isDone ? "完成" : "未完成"}
                </button>
                <button
                  data-id={i.id}
                  onClick={() => dispatch(deleteTodo(i.id))}
                >
                  刪除
                </button>
              </div>
            </div>
          ))}
    </>
  );
}

export default Todo;
