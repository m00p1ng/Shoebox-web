import React from 'react'
import { HeaderBar2StepApp } from '../App/HeaderBarApp'
import ShopMenu from './ShopMenu'
import renderShopList from './ShopList'

const ShopAllProductApp = (props) => (
  <div>
    <HeaderBar2StepApp
      header="Products"
      title1="Shop"
      link1="shop"
      title2="Products"
    />
    <div className="container">
      <div className="row">
        <ShopMenu />
        {renderShopList(props)}
      </div>
    </div>
  </div>
)

export default ShopAllProductApp
