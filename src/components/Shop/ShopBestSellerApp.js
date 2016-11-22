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
      title2="Best Seller"
      link2="best-seller"
    />
    <div className="container">
      <div className="row">
        <ShopMenu />
        {renderShopList(props)}
      </div>
    </div>
  </div>
)

export default ShopBestSellerApp
