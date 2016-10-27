import React, { Component } from 'react'
import axios from 'axios'
import { Grid } from 'react-bootstrap'

import ProductDetail from './ProductDetail'

const URL = "/api/product"

export default class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get(URL)
      .then((response) => {
        let products = response.data
        this.setState({products: products})
      });
  }

  render() {
    return (
      <Grid>
        <h1>Product List</h1>
        {
          this.state.products.map(product =>
            <ProductDetail key={product.slug} product={product} />
          )
        }
      </Grid>
    )
  }
}
