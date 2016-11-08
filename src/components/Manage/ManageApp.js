import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const ManageApp = () => (
  <div>
    <h1>Manage App</h1>
    <p><Link to={`${URL_ROOT}/manage/product`}>Product</Link></p>
    <p><Link to={`${URL_ROOT}/manage/order`}>Order</Link></p>
    <p><Link to={`${URL_ROOT}/manage/promotion`}>Promotion</Link></p>
    <p><Link to=""></Link></p>
  </div>
)

export default ManageApp
