// const [todos, setTodos] = useState([]);
const initializeState = {
  todos: [],
};

const todoReducer = (state = initializeState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (!action.payload.text) return state;
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((i) => i.id !== action.payload.id),
      };
    case "CHANGE_ISDONE":
      state.todos.forEach((i) =>
        i.id === action.payload.id ? (i.isDone = !i.isDone) : ""
      );
      return {
        ...state,
        todos: [...state.todos],
      };
    case "EDIT_TODO":
      const { id, text } = action.payload;
      state.todos.forEach((i) => (i.id === id ? (i.text = text) : ""));
      return {
        ...state,
        todos: [...state.todos],
      };
    case "REMOVE_ALL_TODOS":
      return {
        ...state,
        todos: [],
      };
    default:
      return state;
  }
};

export default todoReducer;
