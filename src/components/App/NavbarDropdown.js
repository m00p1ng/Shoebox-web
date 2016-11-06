import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const NavbarBrandDropdown = () => (
  <ul id="sbox-brand-dropdown" className="dropdown-content">
    <li><a href="#!">Nike</a></li>
    <li><a href="#!">Vans</a></li>
    <li><a href="#!">Converse</a></li>
    <li><a href="#!">Allen Edmonds</a></li>
  </ul>
)

const NavbarShopDropdown = () => (
  <ul id="sbox-shop-dropdown" className="dropdown-content">
    <li><Link to={`${URL_ROOT}/shop/feature`}>Feature</Link></li>
    <li><Link to={`${URL_ROOT}/shop/bestseller`}>Best Seller</Link></li>
    <li className="divider"></li>
    <li><Link to={`${URL_ROOT}/shop`}>Shop</Link></li>
  </ul>
)

const NavbarGuestDropdown = () => (
  <ul id="sbox-guest-dropdown" className="dropdown-content">
    <li><Link to={`${URL_ROOT}/login`}>Login</Link></li>
    <li><Link to={`${URL_ROOT}/register`}>Register</Link></li>
  </ul>
)

const NavbarCustomerDropdown = () => (
  <ul id="sbox-customer-dropdown" className="dropdown-content">
    <li><Link to={`${URL_ROOT}/logout`}>Logout</Link></li>
    <li><Link to={`${URL_ROOT}/profile`}>Profile</Link></li>
  </ul>
)

const NavbarEmployeeDropdown = () => (
  <ul id="sbox-employee-dropdown" className="dropdown-content">
    <li><Link to={`${URL_ROOT}/logout`}>Logout</Link></li>
    <li><Link to={`${URL_ROOT}/profile`}>Profile</Link></li>
  </ul>
)

const NavbarDropdown = () => (
  <div>
    <NavbarBrandDropdown />
    <NavbarShopDropdown />
    <NavbarGuestDropdown />
    <NavbarCustomerDropdown />
    <NavbarEmployeeDropdown />
  </div>
)

export default NavbarDropdown
