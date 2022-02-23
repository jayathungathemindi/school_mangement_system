import { combineReducers } from "redux";
import * as Reducers from "./Reducers";

const { LoginReducer } = Reducers;
const AllReducers = combineReducers({
  LoginReducer,
});
export default AllReducers;
