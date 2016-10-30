import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import {
  Grid,
  Button,
  ButtonGroup,
  Col,
  Row,
  Thumbnail
} from 'react-bootstrap'

export default class ProductList extends Component {
  render() {
    if(this.props.products.length == 0) {
      return (
        <Grid>
          <h1>Product List</h1>
          <h3>Loading...</h3>
        </Grid>
      )
    }
    return (
      <Grid>
        <h1>Product List</h1>
        <Row>
        {
          this.props.products.map(product =>
            <Col sm={6} md={6} lg={4} key={product.slug}>
              <Thumbnail src={product.picture}>
              <Link to={`/app/product/${product.slug}`}><h3>{product.name}</h3></Link>
                <p>{product.description}</p>
                <p><strong>Price :</strong> {product.price} $</p>
                <ButtonGroup>
                  <Button bsStyle="primary">Add to Cart</Button>
                </ButtonGroup>
              </Thumbnail>
            </Col>
          )
        }
        </Row>
      </Grid>
    )
  }
}
