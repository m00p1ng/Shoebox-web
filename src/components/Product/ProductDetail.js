import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'

export default class ProductDetail extends Component {
  render_list(list) {
    let out = list.map(item => {
      return <li key={item}>{item}</li>
    })
    return out
  }

  render() {
    var product = this.props.product
    return (
      <Grid>
        <h1>{product.name}</h1>
        <img src={product.picture} />
        <p><strong>Type :</strong> {product.types}</p>
        <p><strong>Brand :</strong> {product.brand}</p>
        <p><strong>Description :</strong> {product.description}</p>
        <p><strong>Price :</strong> {product.price}</p>
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
