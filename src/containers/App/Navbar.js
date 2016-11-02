import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar } from '../../components'

class NavbarContainer extends Component {
  render() {
    return (
      <Navbar
        NumberOfCartItem={this.props.cart.length}/>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.addedIds
})

export default connect(mapStateToProps)(NavbarContainer)
