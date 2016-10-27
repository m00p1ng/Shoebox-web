import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import {
  App,
  Home,
  ProductDetail,
  FormLogin
} from './components'

import {
  ProductList
} from './containers'

render((
  <Router history={browserHistory}>
    <Route path='/app' component={App}>
      <IndexRoute component={Home} />
      <route path='/app/product'>
        <IndexRoute component={ProductList} />
        <route path=':slug' component={ProductDetail} />
      </route>
      <Route path='/app/login' component={FormLogin} />
    </Route>
  </Router>
), document.getElementById('app'))
