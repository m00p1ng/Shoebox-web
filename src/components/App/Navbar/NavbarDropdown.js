import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const NavbarBrandDropdown = () => (
  <ul id="sbox-brand-dropdown" className="dropdown-content">
    <li><a><span className="black-text">Nike</span></a></li>
    <li><a><span className="black-text">Vans</span></a></li>
    <li><a><span className="black-text">Converse</span></a></li>
    <li><a><span className="black-text">Allen Edmonds</span></a></li>
  </ul>
)

const showDropdownByRole = (Role) => {
  if(Role === 'employee') {
    return (
      <div>
        <li>
          <Link to={`${URL_ROOT}/profile`}>
            <span className="black-text">Profile</span>
          </Link>
        </li>
        <li>
          <Link to={`${URL_ROOT}/manage`}>
          <span className="black-text">Manage</span>
          </Link>
        </li>
        <li className="divider"></li>
        <li>
          <Link to={`${URL_ROOT}/logout`}>
            <span className="black-text">Logout</span>
          </Link>
        </li>
      </div>
    )
  }
  else if(Role === 'customer') {
    return (
      <div>
        <li>
          <Link to={`${URL_ROOT}/profile`}>
            <span className="black-text">Profile</span>
          </Link>
        </li>
        <li>
          <Link to={`${URL_ROOT}/history`}>
            <span className="black-text">History</span>
          </Link>
        </li>
        <li className="divider"></li>
        <li>
          <Link to={`${URL_ROOT}/logout`}>
            <span className="black-text">Logout</span>
          </Link>
        </li>
      </div>
    )
  }
  else {
    return (
      <div>
        <li>
          <Link to={`${URL_ROOT}/login`}>
            <span className="black-text">Login</span>
          </Link>
        </li>
        <li>
          <Link to={`${URL_ROOT}/register`}>
            <span className="black-text">Register</span>
          </Link>
        </li>
      </div>
    )
  }
}

const NavbarUserDropdown = ({Role}) => (
  <ul id="sbox-user-dropdown" className="dropdown-content">
    {showDropdownByRole(Role)}
  </ul>
)

const NavbarDropdown = ({Role}) => (
  <div>
    <NavbarBrandDropdown />
    <NavbarUserDropdown
      Role={Role}/>
  </div>
)

NavbarDropdown.propTypes = {
  Role: PropTypes.string.isRequired
}

export default NavbarDropdown
