import React, { PropTypes } from 'react'
import { HeaderBar2StepApp } from '../App/HeaderBarApp'

const render_list = (list) => (
  list.map(item => {
    return <li key={item}>{item}</li>
  })
)

const ShopPicture = ({picture}) => (
  <div className="col l7 sb-shop-detail-img">
    <div className="center">
      <img src={picture} alt="product-picture" />
    </div>
  </div>
)

const ShopItemDetail = ({product, onClickedAddToCart}) => (
  <div className="col l5 sb-shop-detail sb-shop-detail-grey-box">
    <div className="sb-shop-detail-text">
      <div>
        <h5 className="sb-bold">
          {product.brand}
        </h5>
        <h5 className="sb-bold">
          {product.name}
        </h5>
      </div>
      <span className="sb-shop-detail-price sb-bold">
        $ {product.price}
      </span>
      <br />
      <span className="sb-shop-detail-small-text">
        Incl. VAT in Thailand, packageing and shipping FREE
      </span>
      <br /><br />
      <span className="sb-shop-detail-section sb-bold">
        PRODUCT DETAILS
      </span>
      <div className="sb-shop-detail-first-line">
        <span className="sb-shop-detail-med-text sb-bold">
          Type:{' '}
        </span>
        <span className="sb-shop-detail-med-text">
          {product.types}
        </span>
      </div>
      <span className="sb-shop-detail-med-text sb-bold">
        Color:{' '}
      </span>
      <span className="sb-shop-detail-med-text">
        {product.color}
      </span>
      <br />
      <span className="sb-shop-detail-med-text sb-bold">
        Date Arrival:{' '}
      </span>
      <span className="sb-shop-detail-med-text">
        {product.date.day}-{product.date.month}-{product.date.year}
      </span>
      <div className="sb-shop-detail-desc">
        <span className="sb-shop-detail-med-text">
          {product.description}
        </span>
      </div>
    </div>
    <button
      className="waves-effect waves-light btn orange darken-3 sb-shop-detail-add-to-cart-btn"
      onClick={onClickedAddToCart}>
      <i className="material-icons right white-text">shopping_cart</i>
      ADD TO CART
    </button>
  </div>
)

const ShopBody = ({product, onClickedAddToCart}) => (
  <div className="container">
    <div className="row">
      <div className="col l12 card white">
        <ShopPicture picture={product.picture} />
        <ShopItemDetail
          product={product}
          onClickedAddToCart={onClickedAddToCart}/>
      </div>
    </div>
  </div>
)

const ShopItemDetailApp = ({product, onClickedAddToCart}) => (
  <div>
    <HeaderBar2StepApp
      header="Product Detail"
      title1="Shop"
      link1="shop"
      title2={product.name}
      link2={product.slug} />
    <ShopBody
      product={product}
      onClickedAddToCart={onClickedAddToCart}/>
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
    color: PropTypes.string.isRequired,
    is_available: PropTypes.bool.isRequired,
    is_discount: PropTypes.bool.isRequired,
    discountPercent : PropTypes.number.isRequired
  }).isRequired
}

export default ShopItemDetailApp
