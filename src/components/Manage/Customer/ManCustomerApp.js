import React from 'react'
import { HeaderBar2StepApp } from '../HeaderBarApp'
import ManageMenu from '../ManageMenu'

const ManCustomerApp = () => (
  <div>
    <HeaderBar2StepApp
      link="customer"
      title="Customer" />
    <div className="container">
      <div className="row">
        <ManageMenu />
      </div>
    </div>
  </div>
)

export default ManCustomerApp
