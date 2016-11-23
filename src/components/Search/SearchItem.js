import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const SearchItem = ({product}) => (
  <div className="col l3 m4 s6 sb-shop-card-item center">
    <div className="card white" >
    <div>
    <Link to={`${URL_ROOT}/shop/${product.slug}`}>
      <img
        src={product.picture}
        alt={product.slug} />
    </Link>
    </div>
          <span className="sb-bold black-text sb-shop-med-text">{product.brand}</span>
        <br />
        <span className="sb-shop-med-text">{product.name}</span>
        <br />
        <div className="sb-shop-price-box">
          <span className="sb-shop-med-text sb-shop-price-text">$ {product.price}</span>
        </div>
  </div>
  </div>
)

SearchItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default SearchItem
