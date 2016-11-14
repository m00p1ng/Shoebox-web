import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const renderOrder = (Role) => {
  if(Role === 'employee') {
    return (
      <li><Link to={`${URL_ROOT}/manage/order`}>Order</Link></li>
    )
  }
}

const NavbarDesktopMenu = ({NumberOfCartItem, Username, Role}) => (
  <ul className="right hide-on-med-and-down">
    <li><Link to={`${URL_ROOT}/search`}>Search</Link></li>
    <li><Link to={`${URL_ROOT}/shop`}>Shop</Link></li>
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
    <li>
      <Link to={`${URL_ROOT}/cart`}>Cart
      {
        (NumberOfCartItem > 0)? (
          <span className="badge red white-text">{NumberOfCartItem}</span>
        ) : (<span></span>)
      }
      </Link>
    </li>
    {renderOrder(Role)}
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

NavbarDesktopMenu.propTypes = {
  NumberOfCartItem: PropTypes.number.isRequired,
  Username: PropTypes.string.isRequired
}

export default NavbarDesktopMenu
