import { createStore, applyMiddleware, compose } from "redux";

import ReduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [ReduxThunk];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
