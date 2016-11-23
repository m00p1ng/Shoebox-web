import React, { Component } from 'react'
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
  Redirect
} from 'react-router'
import { URL_ROOT } from 'endpoint'

import NotFound from './constants/404/NotFound'
import AboutUs from './constants/AboutUs/AboutUs'

import { App } from './components'

import {
  Home,

  ShopApp,
  ShopFeatureApp,
  ShopBestSellerApp,
  ShopAllProductApp,
  ShopNewArrivalApp,
  ShopMostViewsApp,
  ShopItemDetailApp,

  SearchApp,

  LoginApp,
  LogoutApp,
  RegisterApp,
  RegisterSuccessApp,
  ProfileApp,

  CartApp,
  CheckoutApp,
  CheckoutSuccessApp,

  OrderHistoryApp,

  ManageApp,
  ManOrderApp,

  ManProductApp,
  ManProductCreateApp,
  ManProductUpdateApp,

  ManCustomerApp,
  ManCustomerCreateApp,
  ManCustomerUpdateApp,

  ManSupplierApp
} from './containers'

export default (
  <Route path='/'>
    <Route path={`${URL_ROOT}`} component={App}>
      <IndexRoute component={Home} />


      <Route path='shop'>
        <IndexRoute component={ShopApp} />
        <Route path='feature' component={ShopFeatureApp} />
        <Route path='best-seller' component={ShopBestSellerApp} />
        <Route path='all' component={ShopAllProductApp} />
        <Route path='new-arrival' component={ShopNewArrivalApp} />
        <Route path='most-views' component={ShopMostViewsApp} />
        <route path='brand'>
          <IndexRoute component={ShopApp} />
        </route>
        <Route path=':slug' component={ShopItemDetailApp} />
      </Route>
      <Route path='cart'>
        <IndexRoute component={CartApp} />
        <route path='checkout'>
          <IndexRoute component={CheckoutApp} />
          <route path='success' component={CheckoutSuccessApp} />
        </route>
      </Route>
      <Route path='search' component={SearchApp} />


      <Route path='login' component={LoginApp} />
      <Route path='logout' component={LogoutApp} />
      <route path='register'>
        <IndexRoute component={RegisterApp} />
        <route path='Success' component={RegisterSuccessApp} />
      </route>
      <Route path='profile' component={ProfileApp} />

      <Route path='history' component={OrderHistoryApp} />

      <Route path='manage'>
        <IndexRoute component={ManageApp} />
        <route path='product'>
          <IndexRoute component={ManProductApp} />
          <route path='new' component={ManProductCreateApp} />
          <route path='edit' component={ManProductUpdateApp} />
        </route>
        <route path='customer'>
          <IndexRoute component={ManCustomerApp} />
          <route path='create' component={ManCustomerCreateApp} />
          <route path='edit' component={ManCustomerUpdateApp} />
        </route>
        <route path='order'>
          <IndexRoute component={ManOrderApp} />
        </route>
        <route path='supplier'>
          <IndexRoute component={ManSupplierApp} />
        </route>
      </Route>

      <Route path='aboutus' component={AboutUs} />
      <Route path='404' component={NotFound} />
      <Redirect from='*' to={`${URL_ROOT}/404`} />
    </Route>
  </Route>
)
