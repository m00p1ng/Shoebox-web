import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const NavbarLogo = () => (
  <Link to={`${URL_ROOT}`} className="brand-logo">
    <img id="sbox-nav-logo" src="/static/images/shoebox_logo.png" />
  </Link>
)

export default NavbarLogo
