import React, { PropTypes } from 'react'
import CartList from './CartList'
import CartSummary from './CartSummary'

const CartApp = () => (
  <div>
    <h1>CartApp</h1>
    <CartList />
    <CartSummary />
  </div>
)

export default CartApp
