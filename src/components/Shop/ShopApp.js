import React from 'react'
import { HeaderBarApp } from '../App/HeaderBarApp'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'
import ShopMenu from './ShopMenu'
import renderShopList from './ShopList'

const ShopApp = (props) => (
  <div>
    <HeaderBarApp
      title="Shop"
      link="shop"/>
    <div className="row">
      <div className="container">
        <ShopMenu />

        <div className="col l10 card">
          <div className="row center">
            <div className="sb-shop-header-bar sb-color-pink">
              Shoebox
            </div>
          </div>
          <div className="row sb-shop-category-row">
            <div className="col l6">
            <Link to={`${URL_ROOT}/shop/all`}>
              <img className="responsive-img" src="http://i.imgur.com/O70G235.png" alt="" />
            </Link>
            </div>
            <div className="col l6">
            <Link to={`${URL_ROOT}/shop/feature`}>
              <img className="responsive-img" src="http://i.imgur.com/7tMVows.png" alt="" />
            </Link>
            </div>
          </div>
          <div className="row sb-shop-category-row">
            <div className="col l6">
            <Link to={`${URL_ROOT}/shop/new-arrival`}>
              <img className="responsive-img" src="http://i.imgur.com/GKx2dBu.png" alt="" />
            </Link>
            </div>
            <div className="col l6">
            <Link to={`${URL_ROOT}/shop/best-seller`}>
              <img className="responsive-img" src="http://i.imgur.com/DwTcv7E.png" alt="" />
            </Link>
            </div>
          </div>
          <div className="row sb-shop-category-row sb-shop-category-last-row">
            <div className="col l6">
            <Link to={`${URL_ROOT}/shop/most-views`}>
              <img className="responsive-img" src="http://i.imgur.com/6pyHZQ1.png" alt="" />
            </Link>
            </div>
            <div className="col l6">
            <Link to={`${URL_ROOT}/shop/brand/nike`}>
              <img className="responsive-img" src="http://i.imgur.com/JjhmvUw.png" alt="" />
            </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
)

export default ShopApp
