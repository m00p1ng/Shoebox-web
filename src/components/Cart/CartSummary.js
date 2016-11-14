import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const CartCheckoutButton = ({role}) => (
  <div className="row">
    <button
      className="orange darken-3 btn-large sbox-checkout-button"
      disabled={
        role.toLowerCase() === 'guest'
      }>
      {
        (role.toLowerCase() === 'guest') ? (
          <Link to={`${URL_ROOT}/checkout`}>
            <span className="white-text">CHECKOUT</span>
          </Link>
        ): (
          <span className="white-text">CHECKOUT</span>
        )
      }
    </button>
    {
      (role.toLowerCase() === 'guest') ? (
          <p>
            Please <Link to={`${URL_ROOT}/login`}>Login</Link>
          </p>
      ) : (<span></span>)
    }
  </div>
)

const CartOrderRow = ({left, right}) => (
  <div className="row sbox-row-order">
    <div className="col s6 l6">
      <p className="sbox-cart-subtotal">{left}</p>
    </div>
    <div className="right-align">
      <p className="sbox-cart-subtotal">
        <strong>{right}</strong>
      </p>
    </div>
  </div>
)

const CartItemRow = ({qty, name, price}) => (
  <div className="row sbox-row-order">
    <div className="col s6 l6">
      <p className="sbox-cart-subtotal">
        {qty}{' x '}{name}
      </p>
    </div>
    <div className="right-align">
      <p className="sbox-cart-subtotal">
        <strong>${price*qty}</strong>
      </p>
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
          <p className="card-title sbox-summary-header padding-bottom-10">
            Order Summary
          </p>
          <div className="divider"></div>

          {CartItemList(products, qty)}

          <CartOrderRow
            left="Shipping fee"
            right="Free"/>

          <div className="divider"></div>

          <CartOrderRow
            left="Total"
            right={`$${total}`}/>
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
