import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const ManageMenu = () => (
  <div className="col l2 m3 m12 hide-on-small-only sb-manage-nav-panel">
    <div className="card white">
      <div className="menu">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <Link to={`${URL_ROOT}/manage`}>Dashboard</Link>
          </li>
        </ul>
        <p className="menu-label">Shop</p>
        <ul className="menu-list">
          <li>
            <Link to={`${URL_ROOT}/manage/product`}>Products</Link>
          </li>
          <li>
            <Link to={`${URL_ROOT}/manage/order`}>Orders</Link>
          </li>
          <li>
            <Link to={`${URL_ROOT}/manage/supplier`}>Suppliers</Link>
          </li>
        </ul>
        <p className="menu-label">Administration</p>
        <ul className="menu-list">
          <li>
            <Link to={`${URL_ROOT}/manage/customer`}>Customers</Link>
          </li>
        </ul>
      </div>
    </div>
	</div>
)

export default ManageMenu
