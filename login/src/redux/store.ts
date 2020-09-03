import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

// Reducer
import { userReducer } from "./reducers/userReducers";
import { authReducer } from "./reducers/authenticationReducer";

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  auth: authReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
