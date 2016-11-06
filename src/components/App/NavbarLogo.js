import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const NavbarLogo = () => (
  <Link to={`${URL_ROOT}`} className="brand-logo">
    <img id="sbox-nav-logo" src="/static/images/navigation_bar/logo_with_name.png" />
  </Link>
)

export default NavbarLogo
