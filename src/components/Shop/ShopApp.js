import React from 'react'
import { HeaderBarApp } from '../App/HeaderBarApp'
import ShopBody from './ShopBody'
import ShopPage from './ShopPage'

const ShopApp = () => (
  <div>
    <HeaderBarApp
      title="Shop"
      link="shop"
    />
    <div className="container">
      <ShopBody />
      <ShopPage />
    </div>
  </div>
)

export default ShopApp
