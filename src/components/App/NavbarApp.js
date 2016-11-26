import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'
import NavbarDropdown from './Navbar/NavbarDropdown'
import NavbarLogo from './Navbar/NavbarLogo'
import NavbarMobileMenu from './Navbar/NavbarMobileMenu'
import NavbarDesktopMenu from './Navbar/NavbarDesktopMenu'

const NavbarApp = ({NumberOfCartItem, Username, Role}) => (
  <header>
    <NavbarDropdown
      Role={Role}/>
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper sbox-white-nav">
          <div className="container">
            <NavbarLogo />
            <NavbarDesktopMenu
              NumberOfCartItem={NumberOfCartItem}
              Username={Username}
              Role={Role}/>
            <NavbarMobileMenu
              NumberOfCartItem={NumberOfCartItem}
              Username={Username}/>
          </div>
        </div>
      </nav>
    </div>
  </header>
)

NavbarApp.propTypes = {
  NumberOfCartItem: PropTypes.number.isRequired,
  Username: PropTypes.string.isRequired,
  Role: PropTypes.string.isRequired
}

export default NavbarApp
