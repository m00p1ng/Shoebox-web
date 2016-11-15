import React, { PropTypes } from 'react'
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

CheckoutBottom.propTypes = {
  total: PropTypes.number.isRequired,
  checkout: PropTypes.func.isRequired
}

export default CheckoutBottom
