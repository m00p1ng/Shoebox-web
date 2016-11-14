import React from 'react'

const PaymentMethod = () => (
	<div className="col s10 offset-s1 l6 offset-l1 sb-grey-box-2" >
    <div className="row" >
      <div className="col s12" >
        <div className="sb-edit-text">
					<a href="#!">Edit</a>
				</div>
  			<div className="sb-grey-box-header">
					Payment method:
				</div>
      </div>
    </div>

    <div className="row" >
      <div className="col s12" >
				<div className="sb-grey-box-card-number">
		      xxxx-xxxx-xxxx-4622
	      </div>
      </div>
    </div>

    <div className="row">
    	<div className="input-field col s8 l3 form-style-6">
        <label id="sb-checkout-cvv-input">
          <span className="sb-cvv-text">CCV / CVV </span>
          <input className="sb-checkout-cvv-input-width" type="text" name="cvv" />
        </label>
      </div>
    </div>
	</div>
)

export default PaymentMethod
