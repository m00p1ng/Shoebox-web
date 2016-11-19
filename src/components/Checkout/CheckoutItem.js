import React, { PropTypes } from 'react'

const CheckoutItem = ({product, qty}) => (
	<div className="row sb-checkout-list-row">
		<div className="col l6 offset-l1 s10 offset-s1">
			<div className="card horizontal sb-checkout-list2">
				<div className="card-image">
					<img
						className="sb-checkout-img2"
						src={product.picture}
						alt={product.slug} />
				</div>
				<div className="card-stacked">
					<div className="card-content">

						<div className="col l7 sb-checkout-margin-in-card">
							<span className="sb-checkout-list2-brand">
								{product.brand}
							</span>
							<br />
							<span className="sb-checkout-list2-name">
								{product.name}
							</span>
							<br />
							<span className="sb-checkout-list2-name">
								$ {product.price}
							</span>
						</div>

						<div className="col l5 sb-checkout-middle-in-card">
							<span className="sb-checkout-list2-right">
								Quantity:&nbsp;{qty}
							</span>
							<br />
							<span className="sb-checkout-list2-right sb-bold">
								$ {product.price*qty}
							</span>
							<br />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

CheckoutItem.propTypes = {
	product: PropTypes.object.isRequired,
	qty: PropTypes.number.isRequired
}

export default CheckoutItem
