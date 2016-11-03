import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router'
import { URL_ROOT } from 'endpoint'

import NotFound from './constants/404/NotFound'

import {
  App,
  Home,
} from './components'

import {
  ProductListApp,
  ProductDetailApp,
  ProductCreateApp,
  ProductUpdateApp,
  SearchApp,

  LoginApp,
  LogoutApp,
  RegisterApp,
  ProfileApp,

  CartApp,
  CheckoutApp,
} from './containers'

export default (
  <Route path='/'>
    <Route path={`${URL_ROOT}`} component={App}>
      <IndexRoute component={Home} />


      <route path='product'>
        <IndexRoute component={ProductListApp} />
        <route path='create' component={ProductCreateApp} />
        <route path='edit' component={ProductUpdateApp} />
        <route path=':slug' component={ProductDetailApp} />
      </route>
      <Route path='cart' component={CartApp} />
      <Route path='checkout' component={CheckoutApp} />
      <Route path='search' component={SearchApp} />


      <Route path='login' component={LoginApp} />
      <Route path='logout' component={LogoutApp} />
      <Route path='register' component={RegisterApp} />
      <Route path='profile' component={ProfileApp} />


      <Route path='404' component={NotFound} />
      <Redirect from='*' to={`${URL_ROOT}/404`} />
    </Route>
  </Route>
)
