import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/* react-redux */
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

/* combined reducers */
import combineReducers  from "./reducers/combinedReducers";


/* array of middlewares */
const middleware = [thunk];


/* Implementing Store */
const initialState = '';
const store = createStore(
  combineReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


