import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const SupplierRow = ({supplier}) => {
  return (
    <tr>
      <td>{supplier.supplierID}</td>
      <td>{supplier.name}</td>
      <td>{supplier.street}</td>
      <td>{supplier.district}</td>
      <td>{supplier.city}</td>
      <td>{supplier.zipcode}</td>
      <td>{supplier.phone}</td>
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
  return suppliers.map(supplier =>
    <SupplierRow
      key={`supplier-${supplier.supplierID}`}
      supplier={supplier} />
  )
}

const SupplierTable = ({suppliers}) => (
  <table
    className="sb-manage-table-in-card responsive-table striped">
    <thead>
      <tr>
        <th data-field="id">ID</th>
        <th data-field="name">Name</th>
        <th data-field="street">Street</th>
        <th data-field="district">District</th>
        <th data-field="city">City</th>
        <th data-field="zipcode">Zipcode</th>
        <th data-field="phone">Phone</th>
      </tr>
    </thead>
    <tbody>
      {renderSuppliers(suppliers)}
    </tbody>
  </table>
)

const renderTable = (suppliers) => {
  if(suppliers.length > 0) {
    return <SupplierTable suppliers={suppliers} />
  }
  else {
    return <h4>Loading...</h4>
  }
}

export default renderTable
