import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const NavbarDesktopMenu = ({NumberOfCartItem, Username}) => (
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
        alignment="right"
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
        <strong>{Username}</strong>
        <i className="material-icons right">arrow_drop_down</i>
      </a>
    </li>
  </ul>
)

export default NavbarDesktopMenu
