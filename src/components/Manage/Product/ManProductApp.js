import React from 'react'
import { HeaderBar2StepApp } from '../HeaderBarApp'
import ManageMenu from '../ManageMenu'
import ManProductList from './ManProductList'

const ManProductApp = ({products}) => (
  <div>
    <HeaderBar2StepApp
      link="product"
      title="Product" />
    <div className="container">
      <div className="row">
        <ManageMenu />
        <ManProductList
          products={products}/>
      </div>
    </div>
  </div>
)

export default ManProductApp
