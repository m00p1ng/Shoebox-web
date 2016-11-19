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
            <Link to={`${URL_ROOT}/shop/feature`}>Feature</Link>
          </li>
  				<li>
            <Link to={`${URL_ROOT}/shop/best-seller`}>Best Seller</Link>
          </li>
          <li>
            <Link to={`${URL_ROOT}/shop/new-arrival`}>New Arrival</Link>
          </li>
          <li>
            <Link to={`${URL_ROOT}/shop/top-view`}>Top Views</Link>
          </li>
          <li>
            <Link to={`${URL_ROOT}/search`}>Search</Link>
          </li>
  			</ul>
  			<p className="menu-label">Brand</p>
  			<ul className="menu-list">
  				<li><a href="#">Nike</a></li>
          <li><a href="#">Adidas</a></li>
          <li><a href="#">New Balance</a></li>
  				<li><a href="#">Vans</a></li>
  				<li><a href="#">Converse</a></li>
  			</ul>
  			<p className="menu-label">Cart</p>
  			<ul className="menu-list">
  				<li><a href="#">Go to cart</a></li>
  			</ul>
  		</div>
    </div>
	</div>
)

export default ShopMenu
