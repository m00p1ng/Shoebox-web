import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  CartApp,
  CartList,
  CartSummary,
  NoItemInCart
} from '../../components'

class CartAppContainer extends Component {
  static propTypes = {
    cart: PropTypes.array.isRequired,
    qty: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    role: PropTypes.string.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return (this.props.qty !== nextProps.qty)
  }

  hasItemInCart() {
    return (this.props.cart.length > 0) ? (
      <div>
        <CartList
          products={this.props.cart}
          qty={this.props.qty}/>
        <CartSummary
          products={this.props.cart}
          qty={this.props.qty}
          total={this.props.total}
          role={this.props.role}/>
      </div>
    ) : ( <NoItemInCart /> )
  }

  render() {
    return (
      <CartApp>
        <h4 className="grey-text text-darken-2">
          {this.props.cart.length} items in cart
        </h4>
        {this.hasItemInCart()}
      </CartApp>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.productDetail,
  qty: state.cart.quantityById,
  total: state.cart.total,
  role: state.user.role
})

export default connect(
  mapStateToProps
)(CartAppContainer)
