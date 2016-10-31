import React, { Component } from 'react'
import CartItem from './CartItem'

export default class CartList extends Component {
  render() {
    return (
      <div>
        <h3>CartList</h3>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
      </div>
    )
  }
}
