import React from 'react'
import { HeaderBar2StepApp } from '../../App/HeaderBarApp'
import ShopMenu from '../ShopMenu'

const ShopByBrandApp = (props) => (
  <div>
    <HeaderBar2StepApp
      header="All Products"
      title1="Shop"
      link1="shop"
      title2="Brand"
    />
    <div className="container">
      <div className="row">
        <ShopMenu />
        <h3>This is shop by brand page</h3>
      </div>
    </div>
  </div>
)

export default ShopByBrandApp
