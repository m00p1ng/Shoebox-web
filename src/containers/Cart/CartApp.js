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

  shouldComponentUpdate(nextProps) {
    return (this.props.qty !== nextProps.qty)
  }

  hasItemInCart() {
    return (this.props.cart.length > 0) ? (
      <div>
        <CartList products={this.props.cart} qty={this.props.qty}/>
        <CartSummary products={this.props.cart} qty={this.props.qty} total={this.props.total} />
      </div>
    ) : ( <NoItemInCart /> )
  }

  render() {
    return (
      <CartApp>
        <h3>{this.props.cart.length} items in cart</h3>
        {this.hasItemInCart()}
      </CartApp>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.productDetail,
  qty: state.cart.quantityById,
  total: state.cart.total
})

const mapDispatchToProps = ({
  getCartItem
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartAppContainer)
