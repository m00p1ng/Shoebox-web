import React from 'react'
import { HeaderBarApp } from '../App/HeaderBarApp'
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
              <img max-height="180px" className="responsive-img" src="http://i.imgur.com/O70G235.png" alt="" />
            </div>
            <div className="col l6">
              <img max-height="180px" className="responsive-img" src="http://i.imgur.com/7tMVows.png" alt="" />
            </div>
          </div>
          <div className="row sb-shop-category-row">
            <div className="col l6">
              <img max-height="180px" className="responsive-img" src="http://i.imgur.com/GKx2dBu.png" alt="" />
            </div>
            <div className="col l6">
              <img max-height="180px" className="responsive-img" src="http://i.imgur.com/DwTcv7E.png" alt="" />
            </div>
          </div>
          <div className="row sb-shop-category-row">
            <div className="col l6">
              <img max-height="180px" className="responsive-img" src="http://i.imgur.com/6pyHZQ1.png" alt="" />
            </div>
            <div className="col l6">
              <img max-height="180px" className="responsive-img" src="http://i.imgur.com/JjhmvUw.png" alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
)

export default ShopApp
