import React from 'react'
import { HeaderBar2StepApp } from '../HeaderBarApp'
import ManageMenu from '../ManageMenu'
import ManOrderList from './ManOrderList'

const ManOrderApp = ({orders}) => (
  <div>
    <HeaderBar2StepApp
      title="Order" />
    <div className="container">
      <div className="row">
        <ManageMenu />
        <ManOrderList
          orders={orders} />
      </div>
    </div>
  </div>
)

export default ManOrderApp
