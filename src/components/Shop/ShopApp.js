import React from 'react'
import { HeaderBarApp } from '../App/HeaderBarApp'
import ShopMenu from './ShopMenu'
import renderShopList from './ShopList'

const ShopApp = ({products, error}) => (
  <div>
    <HeaderBarApp
      title="Shop"
      link="shop"/>
    <div className="container">
      <div className="row">
        <ShopMenu />
        {renderShopList(products, error)}
      </div>
    </div>
  </div>
)

export default ShopApp
