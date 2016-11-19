import React from 'react'
import { HeaderBarApp } from '../App/HeaderBarApp'
import ShopMenu from './ShopMenu'
import ShopList from './ShopList'

const ShopApp = () => (
  <div>
    <HeaderBarApp
      title="Shop"
      link="shop"
    />
    <div className="container">
      <div className="row">
        <ShopMenu />
        <ShopList />
      </div>
    </div>
  </div>
)

export default ShopApp
