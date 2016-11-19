import React, { PropTypes } from 'react'

const CheckoutSummary = ({total, checkout}) => (
<div className="col offset-s1 l3 offset-l1" >

  <div className="row" >
    <div
      className="sb-checkout-subtotal"
      style={{paddingTop: "20px"}}>
      <div className="col l6" >
        Subtotal
      </div>
      <div
        className="col l4 offset-l1
          sb-checkout-total-right
          no-padding" >
        $ {total}
      </div>
    </div>
  </div>

  <div className="row" >
    <div className="sb-checkout-subtotal" >
      <div className="col l6" >
        Shipping fee
      </div>
      <div className="col l4 offset-l1
        sb-checkout-total-right
        no-padding" >
        Free
      </div>
    </div>
  </div>

  <div
    className="divider"
    style={{
      paddingLeft: "10px",
    	paddingRight: "20px"
    }}>
  </div>

  <div className="row" >
    <div className="sb-checkout-total"
      style={{paddingTop: "20px"}}>
      <div className="col l6 " >
        Total
      </div>
      <div className="col l4 offset-l1
        sb-checkout-total-right
        no-padding" >
        $ {total}
      </div>
    </div>
  </div>

  <div className="row" >
    <div className="col l12" >
      <button
        className="waves-effect waves-light
          orange darken-3 btn-large
          sb-pay-button"
        onClick={checkout}>
        PAY NOW
      </button>
    </div>
  </div>

</div>
)

CheckoutSummary.propTypes = {
  total: PropTypes.number.isRequired,
  checkout: PropTypes.func.isRequired
}

export default CheckoutSummary
