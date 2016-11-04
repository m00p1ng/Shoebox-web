import React from 'react'

const CartItem = ({product}) => (
  <div className="card horizontal">
		<div className="row">
			<div className="col s12 l4">
				<div>
					<img className="responsive-img" src="http://watcharaphat.com/static/images/nike/01.jpg" alt="cart_img" />
				</div>
			</div>

			<a href="#"><i className="material-icons sbox-cart-bin">cancel</i></a>

			<div className="col s12 l6">
				<div className="card-content sbox-cart-content-detail">
					<p className="sbox-brand-in-cart">product.brand</p>
					<p className="sbox-name-in-cart">product.name</p>
					<div className="divider"></div>
					<p className="sbox-price-in-cart">Price: $ product.price</p>
					<p className="sbox-quantity-in-cart">Quantity: 1</p>
				</div>
			</div>
		</div>
	</div>
)

export default CartItem
