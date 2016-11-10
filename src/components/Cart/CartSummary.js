import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const CartCheckoutButton = () => (
  <div className="row">
    <div className="card orange darken-3">
      <Link to={`${URL_ROOT}/checkout`}>
        <div className="card-content white-text">
          <p className="sbox-checkout-button">CHECKOUT</p>
        </div>
      </Link>
    </div>
  </div>
)

const CartOrderRow = ({left, right}) => (
  <div className="row sbox-row-order">
    <div className="col s6 l6">
      <p className="sbox-cart-subtotal">{left}</p>
    </div>
    <div className="col s1 l2 offset-l4 offset-s5">
      <p className="sbox-cart-subtotal">{right}</p>
    </div>
  </div>
)

const CartSummary = ({total}) => (
  <div className="col s12 l4 offset-l1">
    <div className="row">
      <div className="card white">
        <div className="card-content">
          <p className="card-title sbox-summary-header padding-bottom-10">Order Summary</p>
          <div className="divider"></div>

          <CartOrderRow
            left="Sub total"
            right="$271"/>

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

    <CartCheckoutButton />

  </div>
)

export default CartSummary
