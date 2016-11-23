import React from 'react'
import { HeaderBar2StepApp } from '../HeaderBarApp'
import ManageMenu from '../ManageMenu'
import ManCustomerList from './ManCustomerList'

const ManCustomerApp = ({customers}) => (
  <div>
    <HeaderBar2StepApp
      title="Customer" />
    <div className="container">
      <div className="row">
        <ManageMenu />
        <ManCustomerList customers={customers}/>
      </div>
    </div>
  </div>
)

export default ManCustomerApp
