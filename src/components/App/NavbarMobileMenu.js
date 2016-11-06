import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const NavbarMobileMenu = () => (
  <ul className="side-nav" id="mobile-demo">
    <li><Link to={`${URL_ROOT}/shop`}>Shop</Link></li>
    <li><Link to={`${URL_ROOT}/search`}>Search</Link></li>
    <li><Link to={`${URL_ROOT}/cart`}>Cart</Link></li>
    <li><Link to={`${URL_ROOT}/profile`}>My Account</Link></li>
  </ul>
)

export default NavbarMobileMenu
