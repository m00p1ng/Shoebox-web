import React, { PropTypes} from 'react'
import CartItem from './CartItem'

const CartList = ({products, qty}) => (
  <div className="col s12 l7 card">
    <div className="row hide-on-med-and-down">
      <div className="col l3">
        <div className="sb-cart-row-header sb-shop-small-text center" >
          PRODUCT
        </div>
      </div>
      <div className="col l3">
        <div className="sb-cart-row-header sb-shop-small-text left">
          PRODUCT INFORMATION
        </div>
      </div>
      <div className="col l2">
      <div className="sb-cart-row-header sb-shop-small-text left">
        QTY
      </div>
      </div>
      <div className="col l2">
        <div className="sb-cart-row-header sb-shop-small-text left">
          UNIT PRICE
        </div>
      </div>
      <div className="col l2">
        <div className="sb-cart-row-header sb-shop-small-text right">
          TOTAL
        </div>
      </div>
    </div>

      {
        products.map(
          (product) => (
            <CartItem
              key={product.slug}
              product={product}
              qty={qty[product.slug]}/>
          )
        )
      }
    </div>
)

CartList.propTypes = {
  products: PropTypes.array.isRequired,
  qty: PropTypes.object.isRequired
}

export default CartList
