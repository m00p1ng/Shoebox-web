import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import {
  Button,
  ButtonGroup,
  Col,
  Row,
  Thumbnail
} from 'react-bootstrap'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <Col sm={6} md={6} lg={4} key={product.slug}>
    <Thumbnail src={product.picture}>
    <Link to={`/app/product/${product.slug}`}><h3>{product.name}</h3></Link>
      <p>{product.description}</p>
      <p><strong>Price :</strong> {product.price} $</p>
      <ButtonGroup>
        <Button
          bsStyle="primary"
          onClick={console.log('click mooping')}>
            Add to Cart
        </Button>
      </ButtonGroup>
    </Thumbnail>
  </Col>
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
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
