import React, { PropTypes } from 'react'
import{ HeaderBar2StepApp } from '../App/HeaderBarApp'

const CheckoutApp = ({children}) => (
  <div>
    <HeaderBar2StepApp
			header="Checkout"
			title1="My Cart"
			link1="cart"
			title2="Checkout"
			link2="checkout"/>
    <div className="container">
      <div className="row">
				<div className="card white">
	        {children}
				</div>
      </div>
    </div>
  </div>
)

CheckoutApp.propTypes = {
	children: PropTypes.node.isRequired
}

export default CheckoutApp
