import React, { PropTypes } from 'react'
import HeaderBarApp from '../App/HeaderBarApp'

const CartApp = ({children}) => (
  <div>
    <HeaderBarApp
      title="My Cart"
      link="cart"
    />
    <div className="container">
      <div className="row">
        {children}
      </div>
    </div>
  </div>
)

CartApp.propTypes = {
  children: PropTypes.node.isRequired
}

export default CartApp
