import React, { PropTypes } from 'react'
import {
  Grid,
  Col,
  Row,
  Button,
  Image
} from 'react-bootstrap'

const ProductDetail = ({product}) => {
  const render_list = (list) => (
    list.map(item => {
      return <li key={item}>{item}</li>
    })
  )

  return (
    <Grid>
      <h1>{product.name}</h1>
      <Row  className="show-grid">
        <Col md={8}>
          <Image src={product.picture} responsive/>
        </Col>
        <Col md={4}>
          <p><strong>Type :</strong> {product.types}</p>
          <p><strong>Brand :</strong> {product.brand}</p>
          <p><strong>Description :</strong> {product.description}</p>
          <p><strong>Price :</strong> {product.price}</p>
          <p><strong>Date :</strong> {product.date['day']}/{product.date['month']}/{product.date['year']}</p>
          <p><strong>Amount :</strong> {product.amount}</p>
          <p><strong>Size :</strong>{render_list(product.size)}</p>
          <p><strong>Color :</strong> {render_list(product.color)}</p>
          <p><strong>Available :</strong> {String(product.is_available)}</p>
          <p><strong>Discount :</strong> {String(product.is_discount)}</p>
          <p><strong>discountPercent :</strong> {product.discountPercent}</p>
          <Button bsStyle="primary">Add to cart</Button>
        </Col>
      </Row>
    </Grid>
  )
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    types: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // price: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    // date : PropTypes.shape({
    //   year: PropTypes.number.isRequired,
    //   month: PropTypes.number.isRequired,
    //   day: PropTypes.number.isRequired
    // }).isRequired,
    // amount: PropTypes.number.isRequired,
    size: PropTypes.array.isRequired,
    color: PropTypes.array.isRequired,
    // is_available: PropTypes.bool.isRequired,
    // is_discount: PropTypes.bool.isRequired,
    // discountPercent : PropTypes.number.isRequired
  }).isRequired
}

export default ProductDetail
