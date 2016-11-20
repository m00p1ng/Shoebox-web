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
            <Link
              to={`${URL_ROOT}/manage`}>
              Dashboard
            </Link>
          </li>
        </ul>
        <p className="menu-label">Shop</p>
        <ul className="menu-list">
          <li>
            <Link
              to={`${URL_ROOT}/manage/product`}
              className="hvr-bounce-to-right"
              activeClassName="is-active">
              Products
            </Link>
          </li>
          <li>
            <Link
              to={`${URL_ROOT}/manage/order`}
              className="hvr-bounce-to-right"
              activeClassName="is-active">
              Orders
            </Link>
          </li>
          <li>
            <Link
              to={`${URL_ROOT}/manage/supplier`}
              className="hvr-bounce-to-right"
              activeClassName="is-active">
              Suppliers
            </Link>
          </li>
        </ul>
        <p className="menu-label">Administration</p>
        <ul className="menu-list">
          <li>
            <Link
              to={`${URL_ROOT}/manage/customer`}
              className="hvr-bounce-to-right"
              activeClassName="is-active">
              Customers
            </Link>
          </li>
        </ul>
      </div>
    </div>
	</div>
)

export default ManageMenu
