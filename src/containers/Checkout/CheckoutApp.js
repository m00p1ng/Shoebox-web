import React, { Component, PropTypes } from 'react'
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
  static propTypes = {
    allcart: PropTypes.object.isRequired,
    cart: PropTypes.array,
    qty: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    role: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    checkout: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return (this.props.qty !== nextProps.qty)
  }

  render() {
    const {checkout, allcart, total} = this.props
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
                checkout={() => checkout(allcart, total)}/>
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
  user: state.user.detail
})

const mapDispatchToProps = ({
  checkout
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutAppContainer)
