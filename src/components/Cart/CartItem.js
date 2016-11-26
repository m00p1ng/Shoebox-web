import React, { PropTypes } from 'react'

const CartItem = ({product, qty}) => (
  <div className="row">
    <div className="row">
      <div className="divider sb-cart-divider grey lighten-3"></div>
    </div>
    <div className="row">
      <div className="col l3 s5 sb-cart-img center">
        {/* <div className="sb-cart-img center"> */}
          <img src={`${product.picture}`} alt="img-alt" />
        {/* </div> */}
      </div>
      <div className="col l3 sb-cart-product-text">
        <div className="row sb-bold">{product.brand}</div>
        <div className="row sb-cart-product-name sb-shop-med-text">{product.name}</div>
        <div className="row sb-cart-remove sb-shop-small-text">Remove</div>
      </div>
      <div className="col l2 sb-cart-product-text">
        <div className="sb-shop-small-text left">{qty}</div>
      </div>
      <div className="col l2 sb-cart-product-text">
        <div className="sb-shop-small-text left">$ {product.price}</div>
      </div>
      <div className="col l2 sb-cart-product-text">
        <div className="sb-shop-small-text right sb-cart-total-price">$ {product.price*qty}</div>
      </div>
    </div>
  </div>
)

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
  qty: PropTypes.number.isRequired
}

export default CartItem
