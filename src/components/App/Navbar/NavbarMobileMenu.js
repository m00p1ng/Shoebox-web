import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const LinkShopMenu = ({title, link}) => (
  <li>
    <Link
      to={`${URL_ROOT}/shop/${link}`}
      className="hvr-bounce-to-right"
      activeClassName="is-active">
      {title}
    </Link>
  </li>
)

const NavbarMobileMenu = ({NumberOfCartItem, Username}) => (
  <div>
    <ul className="right hide-on-large-only">
      <Link to={`${URL_ROOT}/cart`}>
        {
          (NumberOfCartItem > 0)? (
            <i className="material-icons grey-text">shopping_cart</i>
          ) : (
            <i className="material-icons grey-text">shopping_cart</i>
          )
        }
      </Link>
    </ul>
    <a data-activates="mobile-demo" className="button-collapse">
      <i className="material-icons">menu</i>
    </a>
    <ul className="side-nav" id="mobile-demo">
      <li>
        <Link to={`${URL_ROOT}`}>Welcome {Username}</Link>
      </li>
      <div className="divider grey lighten-4"></div>
      <li className="no-padding">
        <ul className="collapsible collapsible-accordion">
          <li><a className="collapsible-header  waves-effect waves-orange">Shop</a>
            <div className="collapsible-body">
              <ul>
                <LinkShopMenu title="All Products" link="all" />
                <LinkShopMenu title="Feature" link="feature" />
                <LinkShopMenu title="Best Seller" link="best-seller" />
                <LinkShopMenu title="New Arrival" link="new-arrival" />
                <LinkShopMenu title="Most Views" link="most-views" />
              </ul>
            </div>
          </li>
        </ul>
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
    </ul>
  </div>
)

NavbarMobileMenu.propTypes = {
  NumberOfCartItem: PropTypes.number.isRequired,
  Username: PropTypes.string.isRequired
}

export default NavbarMobileMenu
