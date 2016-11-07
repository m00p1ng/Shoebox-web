import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'
import NavbarDropdown from './NavbarDropdown'
import NavbarLogo from './NavbarLogo'
import NavbarMobileMenu from './NavbarMobileMenu'
import NavbarDesktopMenu from './NavbarDesktopMenu'

const NavbarApp = ({NumberOfCartItem, Username, Role}) => (
  <div>
    <NavbarDropdown
      Role={Role}/>
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper sbox-white-nav">
          <NavbarLogo />
          <a href="#" data-activates="mobile-demo" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
          <NavbarDesktopMenu
            NumberOfCartItem={NumberOfCartItem}
            Username={Username}/>
          <NavbarMobileMenu />
        </div>
      </nav>
    </div>
  </div>
)

NavbarApp.propTypes = {
  NumberOfCartItem: PropTypes.number.isRequired,
  Username: PropTypes.string.isRequired,
  Role: PropTypes.string.isRequired
}

export default NavbarApp
