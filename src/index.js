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
if(process.env.NODE_ENV !== 'production')
  middlewares.push(createLogger())
const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)

render((
  <Provider store={store} key='provider'>
    <Router
      onUpdate={() => window.scrollTo(0, 0)}
      history={browserHistory}
      routes={routes}/>
  </Provider>
), document.getElementById('shoebox'))
