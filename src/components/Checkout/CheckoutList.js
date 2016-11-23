import React, { PropTypes } from 'react'
import CheckoutItem from './CheckoutItem'

const CheckoutList = ({products, qty}) => (
  <div>
    {
      products.map(
        (product) => (
          <CheckoutItem
            key={product.slug}
            product={product}
            qty={qty[product.slug]} />
        )
      )
    }
  </div>
)

CheckoutList.propTypes = {
  products: PropTypes.array.isRequired,
  qty: PropTypes.object.isRequired
}

export default CheckoutList
