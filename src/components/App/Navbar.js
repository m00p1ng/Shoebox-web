import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const NavbarDropdown = () => (
  <div>
    <ul id="sbox-brand-dropdown" className="dropdown-content">
      <li><a href="#!">Nike</a></li>
      <li><a href="#!">Vans</a></li>
      <li><a href="#!">Converse</a></li>
      <li><a href="#!">Allen Edmonds</a></li>
    </ul>

    <ul id="sbox-user-dropdown" className="dropdown-content">
      <li><Link to={`${URL_ROOT}/login`}>Login</Link></li>
      <li><Link to={`${URL_ROOT}/logout`}>Logout</Link></li>
      <li><Link to={`${URL_ROOT}/register`}>Register</Link></li>
      <li><Link to={`${URL_ROOT}/profile`}>Profile</Link></li>
    </ul>

    <ul id="sbox-shop-dropdown" className="dropdown-content">
      <li><Link to={`${URL_ROOT}/shop`}>Shop</Link></li>
      <li className="divider"></li>
      <li><Link to={`${URL_ROOT}/shop/feature`}>Feature</Link></li>
      <li><Link to={`${URL_ROOT}/shop/bestseller`}>Best Seller</Link></li>
    </ul>
  </div>
)


const NavbarMobile = () => (
  <ul className="side-nav" id="mobile-demo">
    <li><Link to={`${URL_ROOT}/shop`}>Shop</Link></li>
    <li><Link to={`${URL_ROOT}/search`}>Search</Link></li>
    <li><Link to={`${URL_ROOT}/cart`}>Cart</Link></li>
    <li><Link to={`${URL_ROOT}/profile`}>My Account</Link></li>
  </ul>
)


const NavbarDesktop = ({NumberOfCartItem}) => (
  <ul className="right hide-on-med-and-down">
    <li>
      <a
        className="dropdown-button"
        data-activates="sbox-shop-dropdown"
        data-beloworigin="true"
        data-hover="true">
        Shop<i className="material-icons right">arrow_drop_down</i>
      </a>
    </li>
    <li>
      <a
        className="dropdown-button"
        data-activates="sbox-brand-dropdown"
        data-beloworigin="true"
        data-hover="true"
        data-constrainwidth="false">
        Brand<i className="material-icons right">arrow_drop_down</i>
      </a>
    </li>
    <li><Link to={`${URL_ROOT}/search`}>Search</Link></li>
    <li>
      <Link to={`${URL_ROOT}/cart`}>Cart
      {
        (NumberOfCartItem > 0)? (
          <span className="badge red white-text">{NumberOfCartItem}</span>
        ) : (<span></span>)
      }
      </Link>
    </li>
    <li>
      <a
        className="dropdown-button"
        data-activates="sbox-user-dropdown"
        data-beloworigin="true"
        data-hover="true">
        <strong>Guest</strong><i className="material-icons right">arrow_drop_down</i>
      </a>
    </li>
  </ul>
)


const Navbar = ({NumberOfCartItem}) => (
  <div>
    <NavbarDropdown />
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper sbox-white-nav">
          <Link to={`${URL_ROOT}`} className="brand-logo">
            <img id="sbox-nav-logo" src="/static/images/navigation_bar/logo_with_name.png" />
          </Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
          <NavbarDesktop NumberOfCartItem={NumberOfCartItem}/>
          <NavbarMobile />
        </div>
      </nav>
    </div>
  </div>
)

export default Navbar
