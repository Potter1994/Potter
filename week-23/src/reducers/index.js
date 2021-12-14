import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import visibilityReducer from "./visibilityReducer";

const rootReducer = combineReducers({
  todoReducer,
  visibilityReducer,
});

export default rootReducer;
