import React from 'react'
import CartItem from './CartItem'

const CartList = ({products}) => (
  <div>
    {(products.length > 0) ? (
        products.map((product) => <CartItem key={product} product={product} />)
      ):(
        <h1>No item</h1>
    )}
  </div>
)

export default CartList
