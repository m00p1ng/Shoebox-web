import React from 'react'
import PaymentMethod from './PaymentMethod'
import CheckoutSummary from './CheckoutSummary'

const CheckoutBottom = () => (
  <div className="row">
    <PaymentMethod />
    <CheckoutSummary />
  </div>
)

export default CheckoutBottom
