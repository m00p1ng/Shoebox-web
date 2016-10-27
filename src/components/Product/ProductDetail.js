import React, { Component } from 'react'
import axios from 'axios'
import { Grid } from 'react-bootstrap'

const URL = "/api/product/name"

export default class ProductDetail extends Component {
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
    axios.get(`${URL}/${this.props.params.slug}`)
      .then((response) => {
        let product = response.data
        this.setState({product: product})
      });
  }

  render_list(list) {
    let out = list.map(item => {
      return <li key={item}>{item}&nbsp;</li>
    })
    return out
  }

  render() {
    var product = this.state.product
    console.log(product)
    return (
      <Grid>
        <h1>{product.name}</h1>
        <p><strong>Type :</strong> {product.types}</p>
        <p><strong>Brand :</strong> {product.brand}</p>
        <p><strong>Description :</strong> {product.description}</p>
        <p><strong>Price :</strong> {product.price}</p>
        <p><strong>Picture :</strong> {product.picture}</p>
        <p><strong>Date :</strong> {product.date['day']}-{product.date['month']}-{product.date['year']}</p>
        <p><strong>Amount :</strong> {product.amount}</p>
        <p><strong>Size :</strong>{this.render_list(product.size)}</p>
        <p><strong>Color :</strong> {this.render_list(product.color)}</p>
        <p><strong>Available :</strong> {String(product.is_available)}</p>
        <p><strong>Discount :</strong> {String(product.is_discount)}</p>
        <p><strong>discountPercent :</strong> {product.discountPercent}</p>
      </Grid>
    )
  }
}
