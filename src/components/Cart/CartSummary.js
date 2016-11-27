import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const renderCheckoutText = (role) => {
  if (role.toLowerCase() === 'guest')
    return (
      <p>
        Please <Link to={`${URL_ROOT}/login`}>Login</Link>
      </p>
    )
  if (role.toLowerCase() === 'employee')
    return (
      <p>
        This function for customer only
      </p>
    )
  return (<span></span>)
}

const CartCheckoutButton = ({role}) => (
  <div className="row">
    <Link to={`${URL_ROOT}/cart/checkout`}>
      <button
        className="orange darken-3 btn-large sbox-checkout-button"
        disabled={
          role.toLowerCase() === 'guest' ||
          role.toLowerCase() === 'employee'
        }>
        <span className="white-text">CHECKOUT</span>
      </button>
    </Link>
    {renderCheckoutText(role)}
  </div>
)

const CartOrderRow = ({left, right}) => (
  <div className="row sbox-row-order padding-bottom-10">
    <div className="col s6 l6">
      <div className="sbox-cart-subtotal-left sb-shop-small-text">
        {left}
      </div>
    </div>
    <div className="right-align">
      <div className="sbox-cart-subtotal-right sb-shop-small-text">
        {right}
      </div>
    </div>
  </div>
)

const CartItemRow = ({qty, name, price}) => (
  <div className="row sbox-row-order">
    <div className="col s6 l6">
      <div className="sbox-cart-item-left sb-shop-small-text">
        {qty}{' x '}{name}
      </div>
    </div>
    <div className="right-align">
      <div className="sbox-cart-item-right sb-shop-small-text">
        $ {price*qty}
      </div>
    </div>
  </div>
)

const CartItemList = (products, qty) => (
  products.map(
    (product) => (
      <CartItemRow
        key={product.slug}
        qty={qty[product.slug]}
        price={product.price}
        name={product.name}/>
    )
  )
)

const CartSummary = ({total, products, qty, role}) => (
  <div className="col s12 l4 offset-l1">
    <div className="row">
      <div className="card white">
        <div className="card-content">
          <span className="sb-shop-med-text sb-cart-row-header"
            style={{paddingBottom: "10px"}}>
            Order Summary
          </span>
          <div className="divider"></div>

          {CartItemList(products, qty)}

          <CartOrderRow
            left="Shipping fee"
            right="Free"/>

          <div className="divider padding-top-10"></div>

          <CartOrderRow
            left="Total"
            right={`$ ${total}`}/>
        </div>
      </div>
    </div>

    <CartCheckoutButton role={role}/>

  </div>
)

CartOrderRow.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired
}

CartItemRow.propTypes = {
  qty: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

CartSummary.propTypes = {
  total: PropTypes.number.isRequired,
  products: PropTypes.array.isRequired,
  qty: PropTypes.object.isRequired
}

export default CartSummary
