import React from 'react'
import CartItem from './CartItem'

const CartList = ({products}) => (
        <div className="col s12 l7">
          {(products.length > 0) ? (
              products.map((product) => <CartItem key={product} product={product} />)
            ):(
              <h4>No item</h4>
          )}
        </div>
)

export default CartList
