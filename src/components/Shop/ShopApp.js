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

        <div className="col l10 card">
          <div className="row">
            eiei
          </div>
        </div>

      </div>
    </div>
  </div>
)

export default ShopApp
