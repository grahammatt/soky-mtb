import { combineReducers } from "redux";
import { trailsReducer } from "./trails.reducers.js";

export default combineReducers({
  trails: trailsReducer,
});
