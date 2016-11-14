import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const HeaderBarApp = ({title, link}) => (
	<div className="nav-wrapper sbox-header-bar white-text">
		<div className="container">
			<div className="col s12 sbox-header-bread">
				<Link to={`${URL_ROOT}`} className="breadcrumb">
					<span>Home</span>
				</Link>
        <Link to={`${URL_ROOT}/shop`} className="breadcrumb">
					<span>Shop</span>
				</Link>
				<Link to={`${URL_ROOT}/${link}`} className="breadcrumb">
					<span>{title}</span>
				</Link>
			</div>
			<h2 className="sbox-header-text">{title}</h2>
  	</div>
  </div>
)

const render_list = (list) => (
  list.map(item => {
    return <li key={item}>{item}</li>
  })
)

const ProductDetailApp = ({product, onClickedAddToCart}) => (
  <div>
    <HeaderBarApp
      link={product.slug}
      title={product.name} />
    <button onClick={onClickedAddToCart}>Add to cart</button>
  </div>
)

ProductDetailApp.propTypes = {
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
  }).isRequired
}

export default ProductDetailApp
