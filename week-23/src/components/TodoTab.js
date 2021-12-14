import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodo } from "../actions";

function TodoTab() {
  const dispatch = useDispatch();
  const handleClickTab = (e) => {
    if (e.target.dataset.filter) {
      dispatch(filterTodo(e.target.dataset.filter));
    }
    return;
  };
  const currentTab = useSelector((state) => state.visibilityReducer.filter);

  return (
    <div
      onClick={(e) => handleClickTab(e)}
      style={{
        listStyle: "none",
        display: "flex",
        margin: "10px auto 0",
        width: 250,
        justifyContent: "space-evenly",
      }}
    >
      <li
        className={currentTab === "all" ? "active" : ""}
        data-filter="all"
        style={{
          cursor: "pointer",
          border: "1px solid #333",
          padding: "0px 10px",
        }}
      >
        All
      </li>
      <li
        className={currentTab === "undo" ? "active" : ""}
        data-filter="undo"
        style={{
          cursor: "pointer",
          border: "1px solid #333",
          padding: "0px 10px",
        }}
      >
        Undo
      </li>
      <li
        className={currentTab === "complete" ? "active" : ""}
        data-filter="complete"
        style={{
          cursor: "pointer",
          border: "1px solid #333",
          padding: "0px 10px",
        }}
      >
        Complete
      </li>
    </div>
  );
}

export default TodoTab;
