import React from 'react'
import { HeaderBar2StepApp } from '../../App/HeaderBarApp'
import ShopMenu from '../ShopMenu'

const ShopAllBrandApp = (props) => (
  <div>
    <HeaderBar2StepApp
      header="Brands"
      title1="Shop"
      link1="shop"
      title2="Brands"
    />
    <div className="container">
      <div className="row">
        <ShopMenu />
        <h3>This is all brand page</h3>
      </div>
    </div>
  </div>
)

export default ShopAllBrandApp
