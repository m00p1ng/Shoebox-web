import React, { Component } from 'react'
import { Link } from 'react-router'

import { URL_ROOT } from 'endpoint'

export default class Footer extends Component {
  render() {
    return (
<div>
  <ul id="dropdown1" className="dropdown-content">
    <li><a href="#!">Nike</a></li>
    <li><a href="#!">Vans</a></li>
    <li><a href="#!">Converse</a></li>
    <li><a href="#!">Allen Edmonds</a></li>
  </ul>

    <div className="navbar-fixed">
    <nav>
    <div className="nav-wrapper white_nav">
      <Link to={`${URL_ROOT}`} className="brand-logo">
        <img id="nav_logo" src="/static/images/navigation_bar/logo_with_name.png" />
      </Link>
      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><Link to={`${URL_ROOT}/product`}>Feature Item</Link></li>
        <li><a href="#">Best Seller</a></li>
        <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Brand<i className="material-icons right">arrow_drop_down</i></a></li>
        <li><a href="badges.html">Search</a></li>
        <li><Link to={`${URL_ROOT}/cart`}>Cart</Link></li>
        <li><a href="mobile.html">My Account</a></li>
      </ul>
      <ul className="side-nav" id="mobile-demo">
        <li><a href="#">Feature Item</a></li>
        <li><a href="#">Best Seller</a></li>
        <li><a href="badges.html">Search</a></li>
        <li><a href="collapsible.html">Cart</a></li>
        <li><a href="mobile.html">My Account</a></li>
      </ul>
    </div>
    </nav>
    </div>
</div>
    )
}
}
