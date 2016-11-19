import React from 'react'
import { HeaderBar2StepApp } from '../App/HeaderBarApp'
import ShopMenu from './ShopMenu'
import ShopList from './ShopList'

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
      <div className="row">
        <ShopMenu />
        <ShopList />
      </div>
    </div>
  </div>
)

export default ShopTopViewsApp
