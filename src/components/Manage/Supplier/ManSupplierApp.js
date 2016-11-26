import React from 'react'
import { HeaderBar2StepApp } from '../HeaderBarApp'
import ManageMenu from '../ManageMenu'
import ManSupplierList from './ManSupplierList'

const ManSupplierApp = ({suppliers}) => (
  <div>
    <HeaderBar2StepApp
      title="Supplier" />
    <div className="container">
      <div className="row">
        <ManageMenu />
        <ManSupplierList suppliers={suppliers} />
      </div>
    </div>
  </div>
)

export default ManSupplierApp
