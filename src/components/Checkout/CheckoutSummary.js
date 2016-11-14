import React from 'react'

const CheckoutSummary = () => (
<div className="col offset-s1 l3 offset-l1" >

  <div className="row" >
    <div
      className="sb-checkout-subtotal padding-20" >
      <div className="col l6" >
        Subtotal
      </div>
      <div
        className="col l4 offset-l1
          sb-checkout-total-right
          no-padding" >
        $217.00
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

  <div className="padding-l-r-10-20">
    <div className="divider" ></div>
  </div>

  <div className="row" >
    <div className="sb-checkout-total padding-20" >
      <div className="col l6 " >
        Total
      </div>
      <div className="col l4 offset-l1
        sb-checkout-total-right
        no-padding" >
        $217.00
      </div>
    </div>
  </div>

  <div className="row" >
    <div className="col l12" >
      <button
        className="waves-effect waves-light
          orange darken-3 btn-large
          sb-pay-button">
        PAY NOW
      </button>
    </div>
  </div>

</div>
)

export default CheckoutSummary
