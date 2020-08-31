import { createStore, applyMiddleware } from "redux";
import { userReducer } from "./reducers/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const middleware = [thunk];

export const store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
