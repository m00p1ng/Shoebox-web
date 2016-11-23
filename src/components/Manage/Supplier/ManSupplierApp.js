import React from 'react'
import { HeaderBar2StepApp } from '../HeaderBarApp'
import ManageMenu from '../ManageMenu'

const ManSupplierApp = () => (
  <div>
    <HeaderBar2StepApp
      title="Supplier" />
    <div className="container">
      <div className="row">
        <ManageMenu />
      </div>
    </div>
  </div>
)

export default ManSupplierApp
