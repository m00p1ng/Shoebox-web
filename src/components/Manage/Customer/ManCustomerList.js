import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const CustomerRow = ({customer, id}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{customer.username}</td>
      <td>{customer.firstname}</td>
      <td>{customer.lastname}</td>
      <td>{customer.gender}</td>
      <td>
        {customer.birthday.day}
        /
        {customer.birthday.month}
        /
        {customer.birthday.year}
      </td>
      <td>
        <Link
          to={`${URL_ROOT}/manage/customer/edit`}>
          More
        </Link>
      </td>
      <td>
        <Link
          to={`${URL_ROOT}/manage/customer/edit`}>
          Edit
        </Link>
      </td>
    </tr>
  )
}

const renderCustomers = (customers) => {
  let id = 1
  return customers.map(customer =>
    <CustomerRow
      key={customer.username}
      id={id++}
      customer={customer} />
  )
}

const CustomerTable = ({customers}) => (
  <table
    className="sb-manage-table-in-card responsive-table striped">
    <thead>
      <tr>
        <th data-field="id">#</th>
        <th data-field="username">Username</th>
        <th data-field="firstname">Firstname</th>
        <th data-field="lastname">Lastname</th>
        <th data-field="gender">Gender</th>
        <th data-field="birthday">Birthday</th>
      </tr>
    </thead>
    <tbody>
      {renderCustomers(customers)}
    </tbody>
  </table>
)

const renderTable = (customers) => {
  if(customers.length > 0) {
    return <CustomerTable customers={customers} />
  }
  else {
    return <h4>Loading...</h4>
  }
}

const ManCustomerList = ({customers}) => (
  <div className="col l10 s12 card">
    <h3>All Customer</h3>
    <Link to={`${URL_ROOT}/manage/customer/new`}>
      <button className="waves-effect waves-light btn">
        <i className="material-icons left white-text">add</i>
        customer
      </button>
    </Link>
    {renderTable(customers)}
  </div>
)

export default ManCustomerList
