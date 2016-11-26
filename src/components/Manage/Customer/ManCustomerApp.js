import React from 'react'
import { HeaderBar2StepApp } from '../HeaderBarApp'
import ManageMenu from '../ManageMenu'
import renderTable from './ManCustomerList'
import ManagePagination from '../ManagePagination'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const ManCustomerApp = ({
  customers,
  error,
  totalPage,
  totalOrder,
  activePage,
  handlePage
}) => (
  <div>
    <HeaderBar2StepApp
      title="Customer" />
    <div className="container">
      <div className="row">
        <ManageMenu />
        <div className="col l10 s12 card">
          <h3>All Customer</h3>
          <Link to={`${URL_ROOT}/manage/customer/new`}>
            <button className="waves-effect waves-light btn">
              <i className="material-icons left white-text">add</i>
              customer
            </button>
          </Link>
          {renderTable(customers)}
          <ManagePagination
            totalPage={totalPage}
            activePage={activePage}
            handlePage={handlePage}/>
        </div>
      </div>
    </div>
  </div>
)

export default ManCustomerApp
