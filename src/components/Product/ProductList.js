import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Grid } from 'react-bootstrap'

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
        {
          this.props.products.map(product =>
            <h3 key={product.slug}>
              <Link to={`/app/product/${product.slug}`}>{product.name}</Link>
            </h3>
          )
        }
      </Grid>
    )
  }
}
