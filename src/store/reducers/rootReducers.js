import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import groupReducer from "./groupReducer";

const rootReducer = combineReducers({
  contact: contactReducer,
  group: groupReducer
});

export default rootReducer;
