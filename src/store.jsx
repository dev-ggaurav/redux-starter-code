import { combineReducers, createStore } from "redux";
import accountReducer from "./account/AccountSlice";
import customerReducer from "./customer/CustomerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
