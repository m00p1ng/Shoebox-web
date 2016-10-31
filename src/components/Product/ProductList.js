import React, { PropTypes } from 'react'
import ProductItem from './ProductItem'

const ProductList = ({title, products}) => (
  <div>
    <h1>{title}</h1>
    <div className="container">
      <div className="row">
        {(products.length > 0) ? (
          products.map(product =>
            <ProductItem
              key={product.slug}
              product={product}
            />
          )
        ): (
          <h3>Loading...</h3>
        )}
      </div>
    </div>
  </div>
)

ProductList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductList
