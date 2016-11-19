import React from 'react'
import { HeaderBar2StepApp } from '../HeaderBarApp'
import ManageMenu from '../ManageMenu'
import ManProductList from './ManProductList'

const ManProductApp = () => (
  <div>
    <HeaderBar2StepApp
      link="product"
      title="Product" />
    <div className="container">
	    <div className="row">
        <ManageMenu />
        <ManProductList />
      </div>
    </div>
  </div>
)

export default ManProductApp
