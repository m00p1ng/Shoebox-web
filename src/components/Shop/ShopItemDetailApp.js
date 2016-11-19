import React, { PropTypes } from 'react'
import { HeaderBar2StepApp } from '../App/HeaderBarApp'

const render_list = (list) => (
  list.map(item => {
    return <li key={item}>{item}</li>
  })
)

const ShopItemDetailApp = ({product, onClickedAddToCart}) => (
  <div>
    <HeaderBar2StepApp
			header={product.name}
			title1="Shop"
			link1="shop"
      title2={product.name}
			link2={product.slug} />
    <button onClick={onClickedAddToCart}>Add to cart</button>
  </div>
)

ShopItemDetailApp.propTypes = {
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

export default ShopItemDetailApp
