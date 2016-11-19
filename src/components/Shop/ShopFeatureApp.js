import React from 'react'
import { HeaderBar2StepApp } from '../App/HeaderBarApp'
import ShopBody from './ShopBody'
import ShopPage from './ShopPage'

const ShopFeatureApp = () => (
  <div>
    <HeaderBar2StepApp
      header="Feature"
      title1="Shop"
      link1="shop"
      title2="Feature"
      link2="feature"
    />
    <div className="container">
      <ShopBody />
      <ShopPage />
    </div>
  </div>
)

export default ShopFeatureApp
