import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const OrderRow = ({order}) => {
  return (
    <tr>
      <td>{order.orderID}</td>
      <td>
        {
          (order.timestamp) ? (
            <span>
              {order.timestamp.day}
              /
              {order.timestamp.month}
              /
              {order.timestamp.year}
            </span>
          ): (<span></span>)
        }
      </td>
      <td>
        {
          (order.timestamp) ? (
            <span>
              {order.timestamp.hour}
              :
              {order.timestamp.minute}
              :
              {order.timestamp.second}
            </span>
          ): (<span></span>)
        }
      </td>
      <td>{order.username}</td>
      <td className="left">$ {order.total.toFixed(2)}</td>
      <td>{(order.is_ship) ? "Yes" : "No"}</td>
      <td><a href="#">More</a></td>
      <td><a href="#">Edit</a></td>
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
        <th data-field="id">ID</th>
        <th data-field="date">Date</th>
        <th data-field="time">Time</th>
        <th data-field="brand">Username</th>
        <th data-field="total">Total</th>
        <th data-field="is-ship">Shiped</th>
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

export default renderTable
