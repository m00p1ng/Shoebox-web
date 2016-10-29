import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { URL_ROOT } from 'endpoint'

import {
  App,
  Home,
  FormRegister,
  FormLogin,
  Cart
} from './components'

import {
  ProductList,
  ProductDetail,
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
      </Route>
    </Route>
)
