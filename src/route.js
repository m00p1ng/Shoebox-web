import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { URL_ROOT } from 'config'

import {
  App,
  Home,
<<<<<<< HEAD
  FormLogin,
  FormRegister,
  Cart
=======
  FormRegister,
  Cart,
  Login
>>>>>>> 15af0d458029c84411ae3b0c4fad61c3eba78004
} from './components'

import {
  ProductList,
<<<<<<< HEAD
  ProductDetail
=======
  ProductDetail,
>>>>>>> 15af0d458029c84411ae3b0c4fad61c3eba78004
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
<<<<<<< HEAD
        <Route path='login' component={FormLogin} />
=======
        <Route path='login' component={Login} />
>>>>>>> 15af0d458029c84411ae3b0c4fad61c3eba78004
        <Route path='register' component={FormRegister} />
        <Route path='cart' component={Cart} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
