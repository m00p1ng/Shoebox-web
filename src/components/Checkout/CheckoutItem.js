import React from 'react'

const CheckoutItem = ({product, qty}) => (
	<div className="row sb-checkout-list">
		<div className="col s1 offset-s1">
			<img
				className="sb-checkout-img"
				src="images/nike/01.jpg"
				alt="img01" />
		</div>
		<div className="col s9">
			<div className="row sb-checkout-detail">
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

export default CheckoutItem
