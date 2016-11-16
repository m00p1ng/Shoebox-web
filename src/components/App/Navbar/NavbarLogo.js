import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const NavbarLogo = () => (
<div>
  <Link to={`${URL_ROOT}`} className="brand-logo hide-on-small-only">
    <img id="sbox-nav-logo" src="/static/images/shoebox_logo.png" />
  </Link>

  <Link to={`${URL_ROOT}`} className="brand-logo hide-on-med-and-up">
    <img id="sbox-nav-logo-small" src="/static/images/shoebox_logo.png" />
  </Link>
</div>
)

export default NavbarLogo
