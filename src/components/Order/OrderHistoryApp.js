import React from 'react'
import { HeaderBarApp } from '../App/HeaderBarApp'
import OrderList from './OrderList'

const renderOrders = (orders) => {
  if(orders.length > 0) {
    return (orders.map((order) => (
        <OrderList
          key={`order-${order.orderID}`}
          order={order}/>
      ))
    )
  }
}

const OrderHistoryApp = ({orders, error}) => (
  <div>
    <HeaderBarApp
      title="History" />
    {(!error) ? renderOrders(orders) : <h1>No order now</h1>}
  </div>
)

export default OrderHistoryApp
