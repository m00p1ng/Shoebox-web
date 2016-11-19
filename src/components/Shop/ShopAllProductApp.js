import React from 'react'
import { HeaderBar2StepApp } from '../App/HeaderBarApp'
import ShopMenu from './ShopMenu'
import ShopList from './ShopList'
import Loading from '../../constants/Loading/Loading'

const renderShopList = (products, error) => {
  let hasError = error === true
  let hasProducts = products.length > 0
  if(hasError) return (<h1>Can't Fetch data</h1>)
  if(hasProducts)
    return(
      <ShopList
        products={products}/>
    )
  return ( <Loading /> )
}

const ShopAllProductApp = ({products, error}) => (
  <div>
    <HeaderBar2StepApp
      header="All Products"
      title1="Shop"
      link1="shop"
      title2="All Products"
      link2="all"
    />
    <div className="container">
      <div className="row">
        <ShopMenu />
        {renderShopList(products, error)}
      </div>
    </div>
  </div>
)

export default ShopAllProductApp
