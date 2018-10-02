import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers'
import App from './containers/app'

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunkMiddleware),
  ),
)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)