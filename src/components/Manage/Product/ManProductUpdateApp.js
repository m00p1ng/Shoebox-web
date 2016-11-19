import React from 'react'
import { HeaderBar3StepApp } from '../HeaderBarApp'
import ManageMenu from '../ManageMenu'
import ManProductForm from './ManProductForm'

const ManProductUpdateApp = () => (
  <div>
    <HeaderBar3StepApp
      header="Product Name"
      title1="Product" link1="product"
      title2="Edit" link2="edit"
    />
    <div className="container">
	    <div className="row">
        <ManageMenu />
        <ManProductForm />
      </div>
    </div>
  </div>
)

export default ManProductUpdateApp
