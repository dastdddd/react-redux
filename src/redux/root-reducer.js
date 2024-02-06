import { combineReducers } from "redux";
import { countReducer } from "./reducers/count-reducer";
import { textReducer } from "./reducers/text-reducer";
import { displayReducer } from "./reducers/display-reducer";
import { todoReducer } from "./reducers/todo-reducer";

export const rootReducer = combineReducers({
  count: countReducer,
  text: textReducer,
  display: displayReducer,
  todo: todoReducer,
});