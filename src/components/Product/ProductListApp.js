import React, { PropTypes } from 'react'
import ProductItem from './ProductItem'

const ProductListApp = ({title, children}) => (
  <div>
    <h1>{title}</h1>
    <div className="container">
      <div className="row">
        {children}
      </div>
    </div>
  </div>
)

ProductListApp.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductListApp
