import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const OrderRow = ({order}) => {
  return (
    <tr>
      <td>{order.orderID}</td>
      <td>{order.username}</td>
    </tr>
  )
}

const renderOrders = (orders) => {
  return orders.map(order =>
    <OrderRow
      key={`order-${order.orderID}`}
      order={order} />
  )
}

const OrderTable = ({orders}) => (
  <table
    className="sb-manage-table-in-card responsive-table striped">
    <thead>
      <tr>
        <th data-field="id">#</th>
        <th data-field="brand">Username</th>
      </tr>
    </thead>

    <tbody>
      {renderOrders(orders)}
    </tbody>
  </table>
)

const renderTable = (orders) => {
  if(orders.length > 0) {
    return <OrderTable orders={orders} />
  }
  else {
    return <h4>Loading...</h4>
  }
}

const ManOrderList = ({orders}) => (
  <div className="col l10 s12 card">
    <h3>All Orders</h3>
    {renderTable(orders)}
  </div>
)

export default ManOrderList
