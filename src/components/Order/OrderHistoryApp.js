import React from 'react'
import { HeaderBarApp } from '../App/HeaderBarApp'
import OrderList from './OrderList'
import Pagination from '../App/Pagination'

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

const OrderHistoryApp = ({
  orders,
  error,
  totalPage,
  totalProduct,
  activePage,
  handlePage
}) => (
  <div>
    <HeaderBarApp
      title="History" />
    {(!error) ? (
      <div>
        {renderOrders(orders)}
        <Pagination
          totalPage={totalPage}
          activePage={activePage}
          handlePage={handlePage} />
      </div>
    ) : <h1>No order now</h1>}
  </div>
)

export default OrderHistoryApp
