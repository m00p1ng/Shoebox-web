import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  CheckoutApp,
  CheckoutList,
  ShipAddress,
  PaymentMethod
} from '../../components'
import { getCartItem } from '../../actions/cart'
import { browserHistory } from 'react-router';
import { URL_ROOT } from 'endpoint'

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
      <div>
        {
          (this.props.role.toLowerCase() !== 'guest') ? (
            <CheckoutApp>
              <ShipAddress />
              <CheckoutList
                products={this.props.cart}
                qty={this.props.qty}/>
          		<DividerLine />
              <PaymentMethod />
              {this.props.role}
            </CheckoutApp>
          ) : ( browserHistory.push(`${URL_ROOT}/login`) )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.productDetail,
  qty: state.cart.quantityById,
  total: state.cart.total,
  role: state.user.role
})

const mapDispatchToProps = ({
  getCartItem
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutAppContainer)
