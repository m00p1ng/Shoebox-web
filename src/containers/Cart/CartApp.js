import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  CartApp,
  CartList,
  CartSummary
} from '../../components'
import { getCartProduct } from '../../actions/cart'

class CartAppContainer extends Component {
  componentDidMount() {
      this.props.getCartProduct()
  }

  render() {
    return (
      <CartApp>
        <CartList products={this.props.cart} />
        <CartSummary />
      </CartApp>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart
})


export default connect(mapStateToProps, { getCartProduct })(CartAppContainer)
