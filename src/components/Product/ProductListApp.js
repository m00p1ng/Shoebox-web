import React, { PropTypes } from 'react'
import ProductItem from './ProductItem'

const ProductListApp = ({title, products}) => {
  const renderProducts = (products) => (
    products.map(product =>
      <ProductItem
        key={product.slug}
        product={product}
        onClickedAddToCart={
          () => this.onClickedAddToCart(product.name, product.slug, product)
        }
      />
    )
  )

  return (
    <div>
      <h1>{title}</h1>
      <div className="container">
        <div className="row">
          {renderProducts(products)}
        </div>
      </div>
    </div>
  )
}

ProductListApp.propTypes = {
  products: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default ProductListApp
