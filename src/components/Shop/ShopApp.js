import React from 'react'
import { HeaderBarApp } from '../App/HeaderBarApp'
import ShopMenu from './ShopMenu'
import renderShopList from './ShopList'

const ShopApp = (props) => (
  <div>
    <HeaderBarApp
      title="Shop"
      link="shop"/>
    <div className="row">
      <div className="container">
        <ShopMenu />
        <h1>bobo</h1>
      </div>
    </div>
  </div>
)

export default ShopApp
