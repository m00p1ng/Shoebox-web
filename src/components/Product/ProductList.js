import React, { PropTypes } from 'react'
const ProductList = ({title, children}) => (
  <div>
    <h1>{title}</h1>
    <div className="container">
      <div className="row">
        {children}
      </div>
    </div>
  </div>
)

ProductList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductList
