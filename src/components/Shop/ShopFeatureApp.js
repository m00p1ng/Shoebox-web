import React from 'react'
import { HeaderBar2StepApp } from '../App/HeaderBarApp'
import ShopMenu from './ShopMenu'
import renderShopList from './ShopList'

const ShopFeatureApp = (props) => (
  <div>
    <HeaderBar2StepApp
      header="Feature"
      title1="Shop"
      link1="shop"
      title2="Feature"
      link2="feature"
    />
    <div className="container">
      <div className="row">
        <ShopMenu />
        {renderShopList(props)}
      </div>
    </div>
  </div>
)

export default ShopFeatureApp
