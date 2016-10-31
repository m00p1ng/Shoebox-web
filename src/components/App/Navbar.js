import React, { Component } from 'react'

import { URL_ROOT } from 'endpoint'

export default class Navbar extends Component {
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
      <a href={`${URL_ROOT}`} className="brand-logo"><img id="nav_logo" src="static/images/navigation_bar/logo_with_name.png" /></a>
      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href={`${URL_ROOT}/product`}>Feature Item</a></li>
        <li><a href="#">Best Seller</a></li>
        <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Brand<i className="material-icons right">arrow_drop_down</i></a></li>
        <li><a href="badges.html">Search</a></li>
        <li><a href={`${URL_ROOT}/cart`}>Cart</a></li>
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
