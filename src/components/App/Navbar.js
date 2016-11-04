import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const Navbar = ({NumberOfCartItem}) => (
  <div>
    <ul id="sb-brand-dropdown" className="dropdown-content">
      <li><a href="#!">Nike</a></li>
      <li><a href="#!">Vans</a></li>
      <li><a href="#!">Converse</a></li>
      <li><a href="#!">Allen Edmonds</a></li>
    </ul>

    <ul id="sb-user-dropdown" className="dropdown-content">
      <li><Link to={`${URL_ROOT}/login`}>Login</Link></li>
      <li><Link to={`${URL_ROOT}/logout`}>Logout</Link></li>
      <li><Link to={`${URL_ROOT}/register`}>Register</Link></li>
      <li><Link to={`${URL_ROOT}/profile`}>Profile</Link></li>
    </ul>

    <ul id="sb-shop-dropdown" className="dropdown-content">
      <li><Link to={`${URL_ROOT}/shop`}>Shop</Link></li>
      <li className="divider"></li>
      <li><Link to={`${URL_ROOT}/shop/feature`}>Feature</Link></li>
      <li><Link to={`${URL_ROOT}/shop/bestseller`}>Best Seller</Link></li>
    </ul>

    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper sb-white-nav">
          <Link to={`${URL_ROOT}`} className="brand-logo">
            <img id="sb-nav-logo" src="/static/images/navigation_bar/logo_with_name.png" />
          </Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a
                className="dropdown-button"
                data-activates="sb-shop-dropdown"
                data-beloworigin="true"
                data-hover="true">
                Shop<i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            <li>
              <a
                className="dropdown-button"
                href="#!"
                data-activates="sb-brand-dropdown"
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
                href="#!"
                data-activates="sb-user-dropdown"
                data-beloworigin="true"
                data-hover="true">
                <strong>Guest</strong><i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><Link to={`${URL_ROOT}/shop`}>Shop</Link></li>
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
