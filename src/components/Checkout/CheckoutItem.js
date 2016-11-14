import React from 'react'

const CheckoutItem = ({product, qty}) => (
  <div className="row sbox-checkout-list">
		<div className="col s1 offset-s1">
			<img className="sbox-checkout-img" src={product.picture} alt="img01" />
		</div>
		<div className="col s9">
			<div className="row sbox-checkout-detail">
				<div className="col l4 s6 offset-s2">
					{product.name}
				</div>
				<div className="col l2 offset-l2 s2 offset-s1">
					${product.price}
				</div>
				<div className="col l1 offset-l3 s1">
					x{qty}
				</div>
			</div>
		</div>
	</div>
)

export default CheckoutItem
