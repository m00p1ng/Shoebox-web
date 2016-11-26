import React, { PropTypes } from 'react'

const CartItem = ({product, qty}) => (
  // <div className="card horizontal">
  //   <div className="row">
  //     <div className="col s12 l4">
  //       <div>
  //         <img className="responsive-img" src={`${product.picture}`} alt="" />
  //       </div>
  //     </div>
  //
  //     <a><i className="material-icons sbox-cart-bin">cancel</i></a>
  //
  //     <div className="col s12 l6">
  //       <div className="card-content sbox-cart-content-detail">
  //         <p className="sbox-brand-in-cart">{product.brand}</p>
  //         <p className="sbox-name-in-cart">{product.name}</p>
  //         <div className="divider"></div>
  //         <p className="sbox-price-in-cart">Price: $ {product.price}</p>
  //         <p className="sbox-quantity-in-cart">Quantity: {qty}</p>
  //       </div>
  //     </div>
  //   </div>
  // </div>

  <div className="row">
    <div className="row">
	    <div className="divider sb-cart-divider grey lighten-3"></div>
    </div>
	  <div className="row">
		  <div className="col l3 s5 sb-cart-img center">
			  {/* <div className="sb-cart-img center"> */}
				  <img src="https://kickz.akamaized.net/en/media/images/p/600/adidas-ZX_FLUX-pink_black_white-1.jpg" alt="img-alt" />
				{/* </div> */}
			</div>
			<div className="col l3 sb-cart-product-text">
			  <div className="row sb-bold">Adias</div>
				<div className="row sb-cart-product-name sb-shop-med-text">Fiex Experience</div>
				<div className="row sb-cart-remove sb-shop-small-text">remove</div>
			</div>
			<div className="col l2 sb-cart-product-text">
				<div className="sb-shop-small-text left">2</div>
			</div>
			<div className="col l2 sb-cart-product-text">
				<div className="sb-shop-small-text left">$69.99</div>
			</div>
			<div className="col l2 sb-cart-product-text">
				<div className="sb-shop-small-text right sb-cart-total-price">$139.98</div>
			</div>
		</div>
  </div>
)

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
  qty: PropTypes.number.isRequired
}

export default CartItem
