import React from 'react'
import { HeaderBar2StepApp } from '../HeaderBarApp'
import ManageMenu from '../ManageMenu'

const ManOrderApp = () => (
  <div>
    <HeaderBar2StepApp
      link="order"
      title="Order" />
    <div className="container">
      <div className="row">
        <ManageMenu />
      </div>
    </div>
  </div>
)

export default ManOrderApp
