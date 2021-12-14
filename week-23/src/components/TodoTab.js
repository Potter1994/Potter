import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTab, removeAllTodos } from "../actions";

function TodoTab() {
  const currentTab = useSelector((state) => state.visibilityReducer.filter);
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const handleChangeTab = (e) => {
    if (e.target.dataset.tab) {
      dispatch(changeTab(e.target.dataset.tab));
    }
    return;
  };

  return (
    <>
      <div
        onClick={(e) => handleChangeTab(e)}
        style={{
          listStyle: "none",
          display: "flex",
          width: 400,
          margin: "10px auto",
          justifyContent: "space-evenly",
        }}
      >
        <li
          className={currentTab === "all" ? "active" : ""}
          data-tab="all"
          style={{
            border: "1px solid #aaa",
            padding: 5,
            width: 150,
            cursor: "pointer",
          }}
        >
          All
        </li>
        <li
          className={currentTab === "uncomplete" ? "active" : ""}
          data-tab="uncomplete"
          style={{
            border: "1px solid #aaa",
            padding: 5,
            width: 150,
            cursor: "pointer",
          }}
        >
          Uncomplete
        </li>
        <li
          className={currentTab === "done" ? "active" : ""}
          data-tab="done"
          style={{
            border: "1px solid #aaa",
            padding: 5,
            width: 150,
            cursor: "pointer",
          }}
        >
          Done
        </li>
      </div>
      <button onClick={() => dispatch(removeAllTodos())}>清除全部</button>
    </>
  );
}

export default TodoTab;
