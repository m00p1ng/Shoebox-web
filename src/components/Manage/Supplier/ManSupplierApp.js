import React from 'react'
import { HeaderBar2StepApp } from '../HeaderBarApp'
import ManageMenu from '../ManageMenu'
import renderTable from './ManSupplierList'
import Pagination from '../../App/Pagination'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const ManSupplierApp = ({
  suppliers,
  error,
  totalPage,
  totalOrder,
  activePage,
  handlePage
}) => (
  <div>
    <HeaderBar2StepApp
      title="Supplier" />
    <div className="container">
      <div className="row">
        <ManageMenu />
        <div className="col l10 s12 card">
          <h3>All Suppliers</h3>
          <Link to={`${URL_ROOT}/manage/customer/new`}>
            <button className="waves-effect waves-light btn">
              <i className="material-icons left white-text">add</i>
              suppliers
            </button>
          </Link>
          {renderTable(suppliers)}
          <Pagination
            totalPage={totalPage}
            activePage={activePage}
            handlePage={handlePage}/>
        </div>
      </div>
    </div>
  </div>
)

export default ManSupplierApp
