import React from 'react'
import { HeaderBar3StepApp } from '../HeaderBarApp'
import ManageMenu from '../ManageMenu'
import ManProductForm from './ManProductForm'

const ManProductCreateApp = () => (
  <div>
    <HeaderBar3StepApp
      header="New Product"
      title1="Product" link1="product"
      title2="New" link2="new"
    />
    <div className="container">
      <div className="row">
        <ManageMenu />
        <ManProductForm />
      </div>
    </div>
  </div>
)

export default ManProductCreateApp
