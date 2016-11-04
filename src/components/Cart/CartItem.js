import React from 'react'

const CartItem = ({product}) => (
  <div className="card horizontal">
		<div className="row">
			<div className="col s12 l4">
				<div>
					<img className="responsive-img" src="http://watcharaphat.com/static/images/nike/01.jpg" alt="cart_img" />
				</div>
			</div>

			<a href="#"><i className="material-icons sb-cart-bin">cancel</i></a>

			<div className="col s12 l6">
				<div className="card-content sb_cart-content-detail">
					<p className="sb-brand-in-cart">product.brand</p>
					<p className="sb-name-in-cart">product.name</p>
					<div className="divider"></div>
					<p className="sb-price-in-cart">Price: $ product.price</p>
					<p className="sb-quantity-in-cart">Quantity: 1</p>
				</div>
			</div>
		</div>
	</div>
)

export default CartItem
