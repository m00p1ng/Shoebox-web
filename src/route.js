import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App/App'
import Home from './components/Home/Home'
import ProductList from './components/Product/ProductList'
import FormLogin from './components/User/Login/FormLogin'

render((
  <Router history={browserHistory}>
    <Route path='/app' component={App}>
      <IndexRoute component={Home} />
      <Route path='/app/product' component={ProductList} />
      <Route path='/app/login' component={FormLogin} />
    </Route>
  </Router>
), document.getElementById('app'))
