import React, { PropTypes} from 'react'
import CartItem from './CartItem'

const CartList = ({products, qty}) => (
    <div className="col s12 l7">
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
