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

const LinkNavbar = ({title, link}) => (
  <li>
    <Link to={`${URL_ROOT}/${link}`}>
      <span className="black-text">{title}</span>
    </Link>
  </li>
)

const showDropdownByRole = (Role) => {
  if(Role === 'employee') {
    return (
      <div>
        <LinkNavbar title="Profile" link="profile" />
        <LinkNavbar title="Manage" link="manage" />
        <LinkNavbar title="Logout" link="logout" />
      </div>
    )
  }
  else if(Role === 'customer') {
    return (
      <div>
        <LinkNavbar title="Profile" link="profile" />
        <LinkNavbar title="History" link="history" />
        <LinkNavbar title="Logout" link="logout" />
      </div>
    )
  }
  else {
    return (
      <div>
        <LinkNavbar title="Login" link="login" />
        <LinkNavbar title="Register" link="register" />
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
