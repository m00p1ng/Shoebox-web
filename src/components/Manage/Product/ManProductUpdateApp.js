import React from 'react'
import { HeaderBar3StepApp } from '../HeaderBarApp'
import ManageMenu from '../ManageMenu'
import ManProductForm from './ManProductForm'

const ManProductUpdateApp = () => (
  <div>
    <HeaderBar3StepApp
      header="Product Name"
      title1="Product" link1="product"
      title2="Edit"
    />
    <div className="container">
      <div className="row">
        <ManageMenu />
        <div className="col l10 card">

          <div className="row">
            <div className="col l6 offset-l3 sb-product-edit center">
              <img src="https://ae01.alicdn.com/kf/HTB1hlyDMVXXXXa7XXXXq6xXFXXXo/Men-font-b-Shoes-b-font-Outdoor-Climbing-Mountain-2016-Large-Size-Sneaker-font-b-Leather.jpg" alt="img01" />
            </div>
          </div>
          <ManProductForm />
        </div>
      </div>
    </div>
  </div>
)

export default ManProductUpdateApp
