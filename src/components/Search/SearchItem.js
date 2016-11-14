import React, { PropTypes } from 'react'

const SearchItem = ({product}) => (
  <div>
    <h5>{product.name}</h5>
  </div>
)

SearchItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default SearchItem
