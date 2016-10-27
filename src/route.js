import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { URL_ROOT } from 'config'

import {
  App,
  Home,
  FormLogin,
  FormRegister,
  Cart
} from './components'

import {
  ProductList,
  ProductDetail
} from './containers'

render((
  <Router history={browserHistory}>
    <Route path='/'>
      <Route path={`${URL_ROOT}`} component={App}>
        <IndexRoute component={Home} />
        <route path='product'>
          <IndexRoute component={ProductList} />
          <route path=':slug' component={ProductDetail} />
        </route>
        <Route path='login' component={FormLogin} />
        <Route path='register' component={FormRegister} />
        <Route path='cart' component={Cart} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
