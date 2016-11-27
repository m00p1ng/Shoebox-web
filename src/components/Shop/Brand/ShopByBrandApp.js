import React from 'react'
import { HeaderBar2StepApp } from '../../App/HeaderBarApp'
import ShopMenu from '../ShopMenu'
import renderShopBrandList from './ShopBrandList'

const ShopByBrandApp = (props) => {
  let brand = props.brand
  brand = brand.charAt(0).toUpperCase() + brand.slice(1)

  return (
    <div>
      <HeaderBar2StepApp
        header={brand}
        title1="Shop"
        link1="shop"
        title2={brand}
      />
      <div className="container">
        <div className="row">
          <ShopMenu />
          {renderShopBrandList(props)}
        </div>
      </div>
    </div>
  )
}

export default ShopByBrandApp
