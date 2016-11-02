import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router'
import { URL_ROOT } from 'endpoint'

import NotFound from './constants/404/NotFound'

import {
  App,
  Home,
  FormRegister,
  UserProfile,
  SearchApp,
  Logout,
  CheckoutApp,
  ProductCreate,
  ProductUpdate
} from './components'

import {
  ProductList,
  ProductDetail,
  FormLogin,
  CartApp
} from './containers'

export default (
  <Route path='/'>
    <Route path={`${URL_ROOT}`} component={App}>
      <IndexRoute component={Home} />


      <route path='product'>
        <IndexRoute component={ProductList} />
        <route path='create' component={ProductCreate} />
        <route path=':slug' >
          <IndexRoute component={ProductDetail} />
          <route path='edit' component={ProductUpdate} />
        </route>
      </route>
      <Route path='cart' component={CartApp} />
      <Route path='checkout' component={CheckoutApp} />
      <Route path='search' component={SearchApp} />


      <Route path='login' component={FormLogin} />
      <Route path='logout' component={Logout} />
      <Route path='register' component={FormRegister} />
      <Route path='profile' component={UserProfile} />


      <Route path='404' component={NotFound} />
      <Redirect from='*' to={`${URL_ROOT}/404`} />
    </Route>
  </Route>
)
