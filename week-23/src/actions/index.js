export const addTodo = (textContent) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime(),
      textContent,
      isDone: false,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: {
      id,
    },
  };
};

export const removeTodo = () => {
  return {
    type: "REMOVE_TODO",
  };
};

export const filterTodo = (filter) => {
  return {
    type: "CHANGE_TAB",
    payload: {
      filter,
    },
  };
};

export const changeDoneTodo = (id) => {
  return {
    type: "CHANGE_DONE",
    payload: id,
  };
};
