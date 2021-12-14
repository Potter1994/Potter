// const [todos, setTodos] = useState([])
const initialState = {
  todos: [],
};

// setTodos([action.payload, ...todos])
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case "DELETE_TODO":
      const newTodos = state.todos.filter((i) => i.id !== action.payload.id);
      return {
        ...state,
        todos: newTodos,
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: [],
      };
    case "CHANGE_DONE":
      const id = action.payload;
      state.todos.forEach((i) => {
        if (i.id === id) {
          i.isDone = !i.isDone;
        }
      });
      return {
        ...state,
        todos: [...state.todos],
      };
    default:
      return state;
  }
};

export default todoReducer;
