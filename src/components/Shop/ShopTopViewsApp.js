import React from 'react'
import { HeaderBar2StepApp } from '../App/HeaderBarApp'
import ShopBody from './ShopBody'
import ShopPage from './ShopPage'

const ShopTopViewsApp = () => (
  <div>
    <HeaderBar2StepApp
      header="Top Views"
      title1="Shop"
      link1="shop"
      title2="Top Views"
      link2="top-view"
    />
    <div className="container">
      <ShopBody />
      <ShopPage />
    </div>
  </div>
)

export default ShopTopViewsApp
