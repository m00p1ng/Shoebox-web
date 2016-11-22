import React from 'react'
import { HeaderBar2StepApp } from '../App/HeaderBarApp'
import ShopMenu from './ShopMenu'
import renderShopList from './ShopList'

const ShopNewArrivalApp = (props) => (
  <div>
    <HeaderBar2StepApp
      header="New Arrival"
      title1="Shop"
      link1="shop"
      title2="New Arrival"
      link2="new-arrival"
    />
    <div className="container">
      <div className="row">
        <ShopMenu />
        {renderShopList(props)}
      </div>
    </div>
  </div>
)

export default ShopNewArrivalApp
