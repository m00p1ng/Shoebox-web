import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  CartApp,
  CartList,
  CartSummary,
  NoItemInCart
} from '../../components'
import { getCartItem } from '../../actions/cart'

class CartAppContainer extends Component {
  componentDidMount() {
      this.props.getCartItem()
  }

  hasItemInCart() {
    if(this.props.cart.length > 0) {
      return (
        <div>
          <CartList products={this.props.cart} qty={this.props.qty}/>
          <CartSummary />
        </div>
      )
    }
    else {
      return (
        <NoItemInCart />
      )
    }
  }

  render() {
    return (
      <CartApp>
        {this.hasItemInCart()}
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
