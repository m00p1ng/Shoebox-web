import React from 'react'
import { HeaderBar2StepApp } from '../App/HeaderBarApp'
import ShopBody from './ShopBody'
import ShopPage from './ShopPage'

const ShopNewArrivalApp = () => (
  <div>
    <HeaderBar2StepApp
      header="New Arrival"
      title1="Shop"
      link1="shop"
      title2="New Arrival"
      link2="new-arrival"
    />
    <div className="container">
      <ShopBody />
      <ShopPage />
    </div>
  </div>
)

export default ShopNewArrivalApp
