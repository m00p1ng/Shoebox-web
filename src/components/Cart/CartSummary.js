import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const CartSummary = () => (
  <div className="col s12 l4 offset-l1">
    <div className="row">
      <div className="card white">
        <div className="card-content">
          <p className="card-title sb-summary-header padding-bottom-10">Order Summary</p>
          <div className="divider"></div>
          <div className="row sb-row-order">
            <div className="col s6 l6">
              <p className="sb-cart-subtotal">Subtotal</p>
            </div>
            <div className="col s1 l2 offset-l4 offset-s5">
              <p className="sb-cart-subtotal">$217</p>
            </div>
          </div>

          <div className="row sb-row-order">
            <div className="col s6 l6">
              <p className="sb-cart-shipping">Shipping fee</p>
            </div>
            <div className="col s1 l2 offset-l4 offset-s5">
              <p className="sb-cart-shipping padding-bottom-10">Free</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="row sb_row_order">
            <div className="col s6 l6">
              <p className="sb-cart-total">Total</p>
            </div>
            <div className="col s1 l2 offset-l4 offset-s5">
              <p className="sb-cart-total">$217</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="card orange darken-3">
        <Link to={`${URL_ROOT}/checkout`}>
          <div className="card-content white-text">
            <p className="sb-checkout-button">CHECKOUT</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
)

export default CartSummary
