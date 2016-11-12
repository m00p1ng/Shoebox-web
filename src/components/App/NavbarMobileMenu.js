import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const NavbarMobileMenu = ({NumberOfCartItem, Username}) => (
  <ul className="side-nav" id="mobile-demo">
    <li>
      <Link to={`${URL_ROOT}`}>Welcome {Username}</Link>
    </li>
    <div className="divider grey"></div>
    <li><Link to={`${URL_ROOT}/search`}>Search</Link></li>
    <li><Link to={`${URL_ROOT}/shop`}>Shop</Link></li>
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
  </ul>
)

export default NavbarMobileMenu
