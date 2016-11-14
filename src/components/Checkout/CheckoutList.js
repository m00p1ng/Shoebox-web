import React from 'react'
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

export default CheckoutList
