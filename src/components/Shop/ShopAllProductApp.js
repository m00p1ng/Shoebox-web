import React from 'react'
import { HeaderBar2StepApp } from '../App/HeaderBarApp'
import ShopBody from './ShopBody'
import ShopPage from './ShopPage'

const ShopAllProductApp = () => (
  <div>
    <HeaderBar2StepApp
      header="All Products"
      title1="Shop"
      link1="shop"
      title2="All Products"
      link2="all"
    />
    <div className="container">
      <ShopBody />
      <ShopPage />
    </div>
  </div>
)

export default ShopAllProductApp
