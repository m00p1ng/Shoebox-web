import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ShipAddress,
  CheckoutApp,
  CheckoutList,
  CheckoutBottom
} from '../../components'
import { checkout } from '../../actions/cart'
import { browserHistory } from 'react-router';
import { URL_ROOT } from 'endpoint'

const DividerLine = () => (
  <div className="row">
    <div className="col s10 offset-s1 divider grey"></div>
  </div>
)

class CheckoutAppContainer extends Component {
  shouldComponentUpdate(nextProps) {
    return (this.props.qty !== nextProps.qty)
  }

  render() {
    return (
      <div>
        {
          (this.props.role.toLowerCase() !== 'guest') ? (
            <CheckoutApp>
              <ShipAddress
                user={this.props.user}/>
              <CheckoutList
                products={this.props.cart}
                qty={this.props.qty}/>
          		<DividerLine />
              <CheckoutBottom
                total={this.props.total}
                checkout={() => this.props.checkout(this.props.allcart)}/>
            </CheckoutApp>
          ) : ( browserHistory.push(`${URL_ROOT}/login`) )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  allcart: state.cart,
  cart: state.cart.productDetail,
  qty: state.cart.quantityById,
  total: state.cart.total,
  role: state.user.role,
  username: state.user.username,
  user: state.user.detail
})

const mapDispatchToProps = ({
  checkout
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutAppContainer)
