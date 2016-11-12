import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  CheckoutApp,
  CheckoutList,
  ShipAddress,
  PaymentMethod
} from '../../components'
import { getCartItem } from '../../actions/cart'

const DividerLine = () => (
  <div className="row">
    <div className="col s10 offset-s1 divider grey"></div>
  </div>
)

class CheckoutAppContainer extends Component {
  componentDidMount() {
      this.props.getCartItem()
  }

  shouldComponentUpdate(nextProps) {
    return (this.props.qty !== nextProps.qty)
  }

  render() {
    return (
      <CheckoutApp>
        <ShipAddress />
        <CheckoutList
          products={this.props.cart}
          qty={this.props.qty}/>
    		<DividerLine />
        <PaymentMethod />
      </CheckoutApp>
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
)(CheckoutAppContainer)
