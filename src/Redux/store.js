import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';

import { reducer } from "./reducers/combine";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTIONS_COMPOSE || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;