import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const SupplierRow = ({supplier}) => {
  return (
    <tr>
      <td>{suppliers.supplierID}</td>
      <td>
        <Link
          to={`${URL_ROOT}/manage/supplier/edit`}>
          More
        </Link>
      </td>
      <td>
        <Link
          to={`${URL_ROOT}/manage/supplier/edit`}>
          Edit
        </Link>
      </td>
    </tr>
  )
}

const renderSuppliers = (suppliers) => {
  let id = 1
  return suppliers.map(supplier =>
    <SupplierRow
      key={`$supplier-${supplier.supplierID}`}
      id={id++}
      customer={customer} />
  )
}

const SupplierTable = ({suppliers}) => (
  <table
    className="sb-manage-table-in-card responsive-table striped">
    <thead>
      <tr>
        <th data-field="id">#</th>
      </tr>
    </thead>
    <tbody>
      {renderSuppliers(suppliers)}
    </tbody>
  </table>
)

const renderTable = (suppliers) => {
  if(suppliers.length > 0) {
    return <SuppliersTable suppliers={suppliers} />
  }
  else {
    return <h4>Loading...</h4>
  }
}

const ManSupplierList = ({suppliers}) => (
  <div className="col l10 s12 card">
    <h3>All Suppliers</h3>
    <Link to={`${URL_ROOT}/manage/customer/new`}>
      <button className="waves-effect waves-light btn">
        <i className="material-icons left white-text">add</i>
        suppliers
      </button>
    </Link>
    {renderTable(suppliers)}
  </div>
)

export default ManSupplierList
