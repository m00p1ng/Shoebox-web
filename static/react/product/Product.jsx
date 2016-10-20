import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    var {
      id, prodname, prodtype, description, unitprice,
      amount, size, color, productAvailable, discountAvailable
    } = this.props;
    return (
      <div>
        <p>{id}</p>
        <p>{prodname}</p>
        <p>{prodtype}</p>
        <p>{description}</p>
        <p>{unitprice}</p>
        <p>{amount}</p>
        <p>{size}</p>
        <p>{color}</p>
        <p>{productAvailable}</p>
        <p>{discountAvailable}</p>
      </div>
    )
  }
}
