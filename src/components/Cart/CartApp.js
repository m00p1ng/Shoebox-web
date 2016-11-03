import React, { PropTypes } from 'react'

const CartApp = ({children}) => (
  <div className="container">
    <div className="row">
      <h1>My Cart</h1>
      {children}
    </div>
  </div>
)

export default CartApp
