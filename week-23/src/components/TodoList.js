import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, changeIsDone, editTodo } from "../actions";

function TodoList() {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
  });

  const tab = useSelector((state) => state.visibilityReducer.filter);
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(editTodo(edit));
      setEdit({
        id: null,
        text: "",
      });
    }
    return;
  };

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      {todos &&
        todos
          .filter((i) => (tab === "uncomplete" ? !i.isDone : true))
          .filter((i) => (tab === "done" ? i.isDone : true))
          .map((i) => (
            <div
              key={i.id}
              style={{
                backgroundColor: "#eee",
                marginTop: 5,
                display: "flex",
                padding: 8,
                justifyContent: "space-between",
              }}
            >
              {edit.id === i.id ? (
                <input
                  onKeyPress={(e) => handleKeyPress(e)}
                  onChange={(e) => setEdit({ ...edit, text: e.target.value })}
                  value={edit.text}
                />
              ) : (
                <div>{i.text}</div>
              )}
              {edit.id === i.id ? (
                <button
                  onClick={(e) => {
                    dispatch(editTodo(edit));
                    setEdit({
                      id: null,
                      text: "",
                    });
                  }}
                >
                  更改
                </button>
              ) : (
                ""
              )}
              <div>
                <button
                  onClick={() => dispatch(changeIsDone(i.id))}
                  style={{ marginRight: 4 }}
                >
                  {i.isDone ? "完成" : "未完成"}
                </button>
                <button onClick={() => setEdit({ id: i.id, text: i.text })}>
                  編輯
                </button>
                <button onClick={() => dispatch(deleteTodo(i.id))}>刪除</button>
              </div>
            </div>
          ))}
    </div>
  );
}

export default TodoList;
