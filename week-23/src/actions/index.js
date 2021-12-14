export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime(),
      text,
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

export const changeIsDone = (id) => {
  return {
    type: "CHANGE_ISDONE",
    payload: {
      id,
    },
  };
};

export const editTodo = (todo) => {
  return {
    type: "EDIT_TODO",
    payload: {
      id: todo.id,
      text: todo.text,
    },
  };
};

export const changeTab = (tab) => {
  return {
    type: "CHANGE_TAB",
    payload: {
      tab,
    },
  };
};

export const removeAllTodos = () => {
  return {
    type: "REMOVE_ALL_TODOS",
  };
};
