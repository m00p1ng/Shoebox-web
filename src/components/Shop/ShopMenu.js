import React from 'react'
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

const LinkToOtherPage = ({title, link}) => (
  <li>
    <Link
      to={`${URL_ROOT}/${link}`}
      activeClassName="is-active"
      className="hvr-bounce-to-right">
      {title}
    </Link>
  </li>
)

const ShopMenu = () => (
  <div className="col l2 m3 m12 hide-on-small-only sb-manage-nav-panel">
    <div className="card white">
  		<div className="menu">
  			<p className="menu-label">General</p>
  			<ul className="menu-list">
          <LinkShopMenu title="All Products" link="all" />
          <LinkShopMenu title="Feature" link="feature" />
          <LinkShopMenu title="Best Seller" link="best-seller" />
          <LinkShopMenu title="New Arrival" link="new-arrival" />
          <LinkShopMenu title="Most Views" link="most-views" />
          <LinkToOtherPage title="Search" link="search" />
  			</ul>
        <div className="divider grey lighten-3"></div>
  			<p className="menu-label">Brand</p>
  			<ul className="menu-list">
  				<LinkToOtherPage title="Nike" link="search" />
          <LinkToOtherPage title="Adidas" link="search" />
          <LinkToOtherPage title="New Balance" link="search" />
  				<LinkToOtherPage title="Vans" link="search" />
  				<LinkToOtherPage title="Converse" link="search" />
  			</ul>
        <div className="divider grey lighten-3"></div>
  			<p className="menu-label">Cart</p>
  			<ul className="menu-list">
  				<LinkToOtherPage title="Go to Cart" link="cart" />
  			</ul>
  		</div>
    </div>
	</div>
)

export default ShopMenu
