import { combineReducers, createStore, applyMiddleware } from "redux";
import { userReducer } from "./reducers/userReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
