import React from 'react'
import PaymentMethod from './PaymentMethod'
import CheckoutSummary from './CheckoutSummary'

const CheckoutBottom = ({total}) => (
  <div className="row">
    <PaymentMethod />
    <CheckoutSummary
      total={total}/>
  </div>
)

export default CheckoutBottom
