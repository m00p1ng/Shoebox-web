import React from 'react'

const CartItem = ({product}) => (
  <div className="card horizontal">
		<div className="row">
			<div className="col s12 l4">
				<div>
					<img className="responsive-img" src="http://watcharaphat.com/static/images/nike/01.jpg" alt="cart_img" />
				</div>
			</div>

			<a href="#"><i className="material-icons cart_bin">cancel</i></a>

			<div className="col s12 l6">
				<div className="card-content cart-content_detail">
					<p className="brand_in_cart">product.brand</p>
					<p className="name_in_cart">product.name</p>
					<div className="divider"></div>
					<p className="price_in_cart">Price: $ product.price</p>
					<p className="quantity_in_cart">Quantity: 1</p>
				</div>
			</div>
		</div>
	</div>
)

export default CartItem
