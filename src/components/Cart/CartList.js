import React from 'react'
import CartItem from './CartItem'

const CartList = ({products, qty}) => (
    <div className="col s12 l7">
      {
        (products.length > 0) ? (
          products.map(
            (product) => (
              <CartItem
                key={product.slug}
                product={product}
                qty={qty[product.slug]}/>
            )
          )
        ) : ( <h4>No item</h4> )
      }
    </div>
)

export default CartList
