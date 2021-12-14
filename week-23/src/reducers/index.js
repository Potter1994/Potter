import todoReducer from "./todoReducer";
import visibilityReducer from "./visibilityReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducer,
  visibilityReducer,
});

export default rootReducer;
