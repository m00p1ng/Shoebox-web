import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const SearchItem = ({product}) => (
  <div className="col l3 m4 s6 sb-shop-item caard">
		<div>
		<Link to={`${URL_ROOT}/shop/${product.slug}`}>
			<img
				src={product.picture}
				alt={product.slug} />
		</Link>
		</div>
		<div className="sb-shop-text-section" >
			<span className="sb-bold black-text sb-shop-small-text">{product.brand}</span>
			<br />
				<Link to={`${URL_ROOT}/shop/${product.slug}`}>
					<span className="sb-shop-small-text black-text">{product.name}</span>
				</Link>
			<br />
			<div className="sb-shop-price-box">
				<span className="sb-shop-small-text sb-bold sb-shop-price-text">$ {product.price}</span>
			</div>
		</div>
	</div>
)

SearchItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default SearchItem
