import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import { URL_ROOT } from 'endpoint'

const ProductItem = ({ product }) => (
  <div className="col s12 l3" >
    <div className="card center" >
      <div className="card-image waves-effect waves-block waves-light" >
        <img className="activator" src={product.picture} />
      </div>
      <div className="card-content" >
        <span className="brand left" >
          {product.brand}
        </span> <br />
        <div className="product_name" >
          <a href={`${URL_ROOT}/product/${product.slug}`}>{product.name}</a>
        </div>
        <div className="price" >
            Price: {product.price}
        </div>
        <div className="add_to_cart" >
            <a href="#"><img src="/static/images/add_to_cart_red.png" /></a>
        </div>
      </div>
    </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    types: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    date : PropTypes.shape({
      year: PropTypes.number.isRequired,
      month: PropTypes.number.isRequired,
      day: PropTypes.number.isRequired
    }).isRequired,
    amount: PropTypes.number.isRequired,
    size: PropTypes.array.isRequired,
    color: PropTypes.array.isRequired,
    is_available: PropTypes.bool.isRequired,
    is_discount: PropTypes.bool.isRequired,
    discountPercent : PropTypes.number.isRequired
  }).isRequired,
}

export default ProductItem
