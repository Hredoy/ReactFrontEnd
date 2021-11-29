import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./combinbeRedecer";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;