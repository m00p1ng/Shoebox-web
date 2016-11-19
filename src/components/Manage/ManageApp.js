import React from 'react'
import { HeaderBarApp } from './HeaderBarApp'
import ManageMenu from './ManageMenu'

const ManageApp = () => (
  <div>
    <HeaderBarApp />

    <div className="container">
      <div className="row">
        <ManageMenu />
      </div>
    </div>
  </div>
)

export default ManageApp
