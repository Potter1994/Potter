// const [filter, setFilter] = useState('all');
const initialState = {
  filter: "all",
};

// setFilter('action.payload.filter')

const visibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TAB":
      const tab = action.payload.filter;
      return {
        ...state,
        filter: tab,
      };
    default:
      return state;
  }
};

export default visibilityReducer;
