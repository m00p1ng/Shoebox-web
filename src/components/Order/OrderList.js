import React from 'react'

const CartItem = ({product}) => (
  <div>
    <li>Name: {product.product}</li>
    <li>Price: {product.price}</li>
    <li>Qty: {product.qty}</li>
    <li>subtotal: {product.subtotal}</li>
    <br />
  </div>
)

const renderCartItem = (cart) => {
  return cart.map((product) => (
    <CartItem
      key={product.product}
      product={product} />
  ))
}

const OrderList = ({order}) => (
  <div className="container">
    <h2>Order #{order.orderID}</h2>
    {renderCartItem(order.cart)}
    <h4>Total: {order.total}</h4>
  </div>
)

export default OrderList
