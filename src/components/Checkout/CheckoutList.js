import React from 'react'

const CheckoutList = () => (
  <div className="row sbox-checkout-list">
		<div className="col s1 offset-s1">
			<img className="sbox-checkout-img" src="/static/images/nike/01.jpg" alt="img01" />
		</div>
		<div className="col s9">
			<div className="row sbox-checkout-detail">
				<div className="col l4 s6 offset-s2">
					Nike Fiex Experience
				</div>
				<div className="col l2 offset-l2 s2 offset-s1">
					$69.00
				</div>
				<div className="col l1 offset-l3 s1">
					x1
				</div>
			</div>
		</div>
	</div>
)

export default CheckoutList
