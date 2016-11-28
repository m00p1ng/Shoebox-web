import React from 'react'

const CartItem = ({product}) => (
  <div className="row">
    <div className="row">
      <div className="divider sb-cart-divider grey lighten-3"></div>
    </div>
    <div className="row">
      <div className="col l3 offset-l2 sb-cart-product-text">
        <div className="row sb-bold">
          {product.product}
        </div>
      </div>
      <div className="col l2 sb-cart-product-text">
        <div className="sb-shop-small-text left">
          {product.qty}
        </div>
      </div>
      <div className="col l2 sb-cart-product-text">
        <div className="sb-shop-small-text left">
          $ {product.price}
        </div>
      </div>
      <div className="col l2 sb-cart-product-text">
        <div className="sb-shop-small-text right sb-cart-total-price">
          $ {product.subtotal}
        </div>
      </div>
    </div>
  </div>
)

const renderCartItem = (cart) => {
  return cart.map((product) => (
    <CartItem
      key={product.product}
      product={product} />
  ))
}

const OrderList = ({order}) => {
  const {
    day, month, year,
    hour, minute, second
  } = order.timestamp
  return (
    <div className="container">
      <div className="row card">
        <div className="card-content">
          <span className="sb-header-text">Order #{order.orderID}</span>
          <span className="sb-shop-small-text">Date: {day}/{month}/{year}</span>
          <br />
          <span className="sb-shop-small-text">Time: {hour}:{minute}:{second}</span>
          <br />
          <br />
          <div className="row hide-on-med-and-down">
            <div className="col l3 offset-l2">
              <div className="sb-cart-row-header sb-shop-small-text left">
                PRODUCT NAME
              </div>
            </div>
            <div className="col l2">
            <div className="sb-cart-row-header sb-shop-small-text left">
              QTY
            </div>
            </div>
            <div className="col l2">
              <div className="sb-cart-row-header sb-shop-small-text left">
                UNIT PRICE
              </div>
            </div>
            <div className="col l2">
              <div className="sb-cart-row-header sb-shop-small-text right">
                TOTAL
              </div>
            </div>
          </div>
          {renderCartItem(order.cart)}
          <span className="sb-history-total right">Total: <span className="orange-text darken-2">{order.total}</span></span>
        </div>
      </div>
    </div>
  )
}

export default OrderList
