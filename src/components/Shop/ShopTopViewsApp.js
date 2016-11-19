import React from 'react'
import { HeaderBar2StepApp } from '../App/HeaderBarApp'
import ShopMenu from './ShopMenu'
import renderShopList from './ShopList'

const ShopTopViewsApp = ({products, error}) => (
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
        {renderShopList(products, error)}
      </div>
    </div>
  </div>
)

export default ShopTopViewsApp
