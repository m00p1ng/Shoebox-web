import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import rootReducer from './reducers'
import createLogger from 'redux-logger'

const middlewares = [thunk, apiMiddleware]
middlewares.push(createLogger())
const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)

render((
  <Provider store={store} key='provider'>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
), document.getElementById('app'))
