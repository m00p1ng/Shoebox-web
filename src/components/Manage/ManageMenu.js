import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const LinkManageMenu = ({title, link}) => (
  <li>
    <Link
      to={`${URL_ROOT}/manage/${link}`}
      className="hvr-bounce-to-right"
      activeClassName="is-active">
      {title}
    </Link>
  </li>
)

const ManageMenu = () => (
  <div className="col l2 m3 m12 hide-on-small-only sb-manage-nav-panel">
    <div className="card white">
      <div className="menu">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <LinkManageMenu title="Dashboard" link="dashboard" />
        </ul>
        <p className="menu-label">Shop</p>
        <ul className="menu-list">
          <LinkManageMenu title="Products" link="product" />
          <LinkManageMenu title="Orders" link="order" />
          <LinkManageMenu title="Suppliers" link="supplier" />
        </ul>
        <p className="menu-label">Administration</p>
        <ul className="menu-list">
          <LinkManageMenu title="Customers" link="customer" />
        </ul>
      </div>
    </div>
  </div>
)

export default ManageMenu
