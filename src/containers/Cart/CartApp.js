import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  CartApp,
  CartList,
  CartSummary
} from '../../components'
import { getCartItem } from '../../actions/cart'

class CartAppContainer extends Component {
  componentDidMount() {
      this.props.getCartItem()
  }

  render() {
    return (
      <CartApp>
        <CartList products={this.props.cart} qty={this.props.qty}/>
        <CartSummary />
      </CartApp>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.productDetail,
  qty: state.cart.quantityById
})

const mapDispatchToProps = ({
  getCartItem
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartAppContainer)
