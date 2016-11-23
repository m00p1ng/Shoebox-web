import React from 'react'
import { HeaderBar2StepApp } from '../App/HeaderBarApp'
import ShopMenu from './ShopMenu'
import renderShopList from './ShopList'

const ShopBestSellerApp = (props) => (
  <div>
    <HeaderBar2StepApp
      header="Best Seller"
      title1="Shop"
      link1="shop"
      title2="Best Seller" />
    <div className="container">
      <div className="row">
        <ShopMenu />
        {renderShopList(props)}
      </div>
    </div>
  </div>
)

export default ShopBestSellerApp
