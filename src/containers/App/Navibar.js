import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar } from '../../components'
import { getCartProduct } from '../../actions/cart'

class NavbarContainer extends Component {
  componentDidMount() {
      this.props.getCartProduct()
  }

  render() {
    return (
      <Navbar />
    )
  }
}

// const mapStateToProps = (state) => ({
//   cart: state.cart.addedIds
// })

// export default connect(mapStateToProps, { getCartProduct })(CartAppContainer)
