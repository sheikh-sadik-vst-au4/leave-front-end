import { createStore, compose, applyMiddleware } from "redux";

import thunkMiddleware from "redux-thunk";

import rootReducer from "../_reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);
