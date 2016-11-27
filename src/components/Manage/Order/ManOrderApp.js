import React from 'react'
import { HeaderBar2StepApp } from '../HeaderBarApp'
import ManageMenu from '../ManageMenu'
import renderTable from './ManOrderList'
import Pagination from '../../App/Pagination'

const ManOrderApp = ({
  orders,
  error,
  totalPage,
  totalProduct,
  activePage,
  handlePage
}) => (
  <div>
    <HeaderBar2StepApp
      title="Order" />
    <div className="container">
      <div className="row">
        <ManageMenu />
        <div className="col l10 s12 card">
          <h3>All Orders</h3>
          {renderTable(orders)}
          <Pagination
            totalPage={totalPage}
            activePage={activePage}
            handlePage={handlePage} />
        </div>
      </div>
    </div>
  </div>
)

export default ManOrderApp
