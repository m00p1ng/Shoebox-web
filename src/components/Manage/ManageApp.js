import React from 'react'
import { HeaderBarApp } from './HeaderBarApp'
import ManageMenu from './ManageMenu'

const ManageApp = () => (
  <div>
    <HeaderBarApp />

    <div className="container" >
      <ManageMenu />
    </div>
  </div>
)

export default ManageApp
