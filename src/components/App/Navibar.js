import React, { Component } from 'react'

import { URL_ROOT } from 'endpoint'

export default class Navibar extends Component {
  render() {
    return (

    <div class="navbar-fixed">
    <nav>
    <div class="nav-wrapper white_nav">
      <a href="#" class="brand-logo"><img id="nav_logo" src="static/images/navigation_bar/logo_with_name.png" /></a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Feature Item</a></li>
        <li><a href="#">Best Seller</a></li>
        <li><a href="badges.html">Search</a></li>
        <li><a href="collapsible.html">Cart</a></li>
        <li><a href="mobile.html">My Account</a></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <li><a href="#">Feature Item</a></li>
        <li><a href="#">Best Seller</a></li>
        <li><a href="badges.html">Search</a></li>
        <li><a href="collapsible.html">Cart</a></li>
        <li><a href="mobile.html">My Account</a></li>
      </ul>
    </div>
    </nav>
    </div>
    )
  }
}
