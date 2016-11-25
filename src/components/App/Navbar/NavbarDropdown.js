import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const NavbarBrandDropdown = () => (
  <ul id="sbox-brand-dropdown" className="dropdown-content">
    <LinkNavbar title="Nike" link="shop/brand/nike" />
    <LinkNavbar title="Adidas" link="shop/brand/adidas" />
    <LinkNavbar title="New Balance" link="shop/brand/new-balance" />
    <LinkNavbar title="Vans" link="shop/brand/vans" />
    <LinkNavbar title="Converse" link="shop/brand/converse" />
  </ul>
)

const LinkNavbar = ({title, link}) => (
  <li>
    <Link to={`${URL_ROOT}/${link}`}>
      <span className="grey-text text-darken-2">{title}</span>
    </Link>
  </li>
)

const showDropdownByRole = (Role) => {
  if(Role === 'employee') {
    return (
      <div>
        <LinkNavbar title="Profile" link="profile" />
        <LinkNavbar title="Manage" link="manage/dashboard" />
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
