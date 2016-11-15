import React from 'react'
import PaymentMethod from './PaymentMethod'
import CheckoutSummary from './CheckoutSummary'

const CheckoutBottom = ({total, checkout}) => (
  <div className="row">
    <PaymentMethod />
    <CheckoutSummary
      total={total}
      checkout={checkout}/>
  </div>
)

export default CheckoutBottom
