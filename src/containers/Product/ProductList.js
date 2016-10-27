import React, { Component } from 'react'
import axios from 'axios'
import { ProductList } from '../../components'

const URL = "/api/product"

export default class ProductListContainer extends Component {
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
        this.setState({products})
      });
  }

  render() {
    return (
      <ProductList products={this.state.products} />
    )
  }
}
