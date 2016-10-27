import React, { Component } from 'react'
import axios from 'axios'
import { ProductDetail } from '../../components'

const API_URL = "/api/product/name"

export default class ProductDetailContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {
        date: [],
        color: [],
        size: []
      }
    }
  }

  componentDidMount() {
    axios.get(`${API_URL}/${this.props.params.slug}`)
      .then((response) => {
        let product = response.data
        this.setState({product: product})
      });
  }

  render() {
    var product = this.state.product
    return(
      <ProductDetail product={product} />
    )
  }
}
