import React from 'react'
import { Link } from 'react-router'

import { URL_ROOT } from 'endpoint'

const Navbar = ({cartItem}) => (
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
        <li><Link to={`${URL_ROOT}/product`}>Best Seller</Link></li>
        <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Brand<i className="material-icons right">arrow_drop_down</i></a></li>
        <li><Link to={`${URL_ROOT}/search`}>Search</Link></li>
        <li><Link to={`${URL_ROOT}/cart`}>Cart <span className="badge red white-text">20</span></Link></li>
        <li><Link to={`${URL_ROOT}/profile`}>My Account</Link></li>
      </ul>
      <ul className="side-nav" id="mobile-demo">
        <li><Link to={`${URL_ROOT}/product`}>Feature Item</Link></li>
        <li><Link to={`${URL_ROOT}/product`}>Best Seller</Link></li>
        <li><Link to={`${URL_ROOT}/search`}>Search</Link></li>
        <li><Link to={`${URL_ROOT}/cart`}>Cart</Link></li>
        <li><Link to={`${URL_ROOT}/profile`}>My Account</Link></li>
      </ul>
    </div>
    </nav>
  </div>
</div>
    )

    export default Navbar
