const initializeState = {
  filter: "all",
};

const visibilityReducer = (state = initializeState, action) => {
  switch (action.type) {
    case "CHANGE_TAB":
      return {
        ...state,
        filter: action.payload.tab,
      };
    default:
      return state;
  }
};

export default visibilityReducer;
