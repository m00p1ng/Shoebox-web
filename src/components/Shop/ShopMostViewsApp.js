import React from 'react'
import { HeaderBar2StepApp } from '../App/HeaderBarApp'
import ShopMenu from './ShopMenu'
import renderShopList from './ShopList'

const ShopMostViewsApp = ({products, error}) => (
  <div>
    <HeaderBar2StepApp
      header="Most Views"
      title1="Shop"
      link1="shop"
      title2="Most Views"
      link2="most-views"
    />
    <div className="container">
      <div className="row">
        <ShopMenu />
        {renderShopList(products, error)}
      </div>
    </div>
  </div>
)

export default ShopMostViewsApp
