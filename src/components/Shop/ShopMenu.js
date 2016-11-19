import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const ShopMenu = () => (
  <div className="col l2 m3 m12 hide-on-small-only sb-manage-nav-panel">
    <div className="card white">
  		<div className="menu">
  			<p className="menu-label">General</p>
  			<ul className="menu-list">
          <li>
            <Link
              to={`${URL_ROOT}/shop/all`}
              className="hvr-bounce-to-right"
              activeClassName="is-active">
              All Products
            </Link>
          </li>
  				<li>
            <Link
              to={`${URL_ROOT}/shop/feature`}
              activeClassName="is-active"
              className="hvr-bounce-to-right">
              Feature
            </Link>
          </li>
  				<li>
            <Link
              to={`${URL_ROOT}/shop/best-seller`}
              activeClassName="is-active"
              className="hvr-bounce-to-right">
              Best Seller
            </Link>
          </li>
          <li>
            <Link
              to={`${URL_ROOT}/shop/new-arrival`}
              activeClassName="is-active"
              className="hvr-bounce-to-right">
              New Arrival
            </Link>
          </li>
          <li>
            <Link
              to={`${URL_ROOT}/shop/top-view`}
              activeClassName="is-active"
              className="hvr-bounce-to-right">
              Top Views
            </Link>
          </li>
          <li>
            <Link
              to={`${URL_ROOT}/search`}
              activeClassName="is-active"
              className="hvr-bounce-to-right">
              Search
            </Link>
          </li>
  			</ul>
        <div className="divider grey lighten-3"></div>
  			<p className="menu-label">Brand</p>
  			<ul className="menu-list">
  				<li>
            <Link
              to={`${URL_ROOT}/search`}
              activeClassName="is-active"
              className="hvr-bounce-to-right">
              Nike
            </Link>
          </li>
          <li>
            <Link
              to={`${URL_ROOT}/search`}
              activeClassName="is-active"
              className="hvr-bounce-to-right">
              Adidas
            </Link>
          </li>
          <li>
            <Link
              to={`${URL_ROOT}/search`}
              activeClassName="is-active"
              className="hvr-bounce-to-right">
              New Balance
            </Link>
          </li>
  				<li>
            <Link
              to={`${URL_ROOT}/search`}
              activeClassName="is-active"
              className="hvr-bounce-to-right">
              Vans
            </Link>
          </li>
  				<li>
            <Link
              to={`${URL_ROOT}/search`}
              activeClassName="is-active"
              className="hvr-bounce-to-right">
              Converse
            </Link>
          </li>
  			</ul>
        <div className="divider grey lighten-3"></div>
  			<p className="menu-label">Cart</p>
  			<ul className="menu-list">
  				<li>
            <Link
              to={`${URL_ROOT}/cart`}
              activeClassName="is-active"
              className="hvr-bounce-to-right">
              Go to Cart
            </Link>
          </li>
  			</ul>
  		</div>
    </div>
	</div>
)

export default ShopMenu
