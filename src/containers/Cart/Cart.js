import React, { Component } from 'react'
import { Cart, CartItem } from '../../components'

export default class CartContainer extends Component {
  render() {
    return (
      <Cart title="Cart Page">
        {/* {(this.props.products.length > 0) ? (
          this.props.products.map(product =>
            <ProductItem
              key={product.slug}
              product={product}
            />
          )
        ): (
          <h3>Loading...</h3>
        )} */}
        <CartItem />
      </Cart>
    )
  }
}
