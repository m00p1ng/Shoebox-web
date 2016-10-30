import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { URL_ROOT } from 'endpoint'

import {
  App,
  Home,
  FormRegister,
  Cart,
  NotFound,
  ProductNotFound
} from './components'

import {
  ProductList,
  ProductDetail,
  FormLogin
} from './containers'

export default (
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
      <Route path='*' component={NotFound} />
    </Route>
  </Route>
)
