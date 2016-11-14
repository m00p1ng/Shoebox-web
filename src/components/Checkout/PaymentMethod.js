import React from 'react'

const PaymentMethod = () => (
	<div className="row">
		<div className="col s6 offset-s1 sbox-grey-box-2">

      <div className="row" >
        <div className="col s12" >
          <div className="sbox-grey-box-header">
            Payment method:
          </div>
        </div>
      </div>

      <div className="row" >
        <div className="col s12" >
          <div className="sbox-grey-box-card-number">
            xxxx-xxxx-xxxx-4622
          </div>
        </div>
      </div>

      <div className="row bob">
        <div className="input-field col s3">
          <div className="form-style-6">
            <form>
              <input type="text" name="field1" placeholder="Your Name" />
              <input type="email" name="field2" placeholder="Email Address" />
              <textarea name="field3" placeholder="Type your Message"></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
		</div>
	</div>
)

export default PaymentMethod
