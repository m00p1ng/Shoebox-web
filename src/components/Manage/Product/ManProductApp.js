import React from 'react'
import { HeaderBar2StepApp } from '../HeaderBarApp'
import ManageMenu from '../ManageMenu'
import renderTable from './ManProductList'
import ManagePagination from '../ManagePagination'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const ManProductApp = ({
  products,
  error,
  totalPage,
  totalProduct,
  activePage,
  handlePage
}) => (
  <div>
    <HeaderBar2StepApp
      title="Product" />
    <div className="container">
      <div className="row">
        <ManageMenu />
        <div className="col l10 s12 card">
          <h3>All Products</h3>
          <Link to={`${URL_ROOT}/manage/product/new`}>
            <button className="waves-effect waves-light btn">
              <i className="material-icons left white-text">add</i>
              product
            </button>
          </Link>
          {renderTable(products)}
          <ManagePagination
            totalPage={totalPage}
            activePage={activePage}
            handlePage={handlePage}/>
        </div>
      </div>
    </div>
  </div>
)

export default ManProductApp
