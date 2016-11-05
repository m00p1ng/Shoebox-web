import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Navbar } from '../../components'

class NavbarContainer extends Component {
  static propTypes = {
    numberOfcartItem: PropTypes.number.isRequired
  }

  render() {
    return (
      <Navbar
        NumberOfCartItem={this.props.numberOfcartItem}
        Username="mooping"/>
    )
  }
}

const mapStateToProps = (state) => ({
  numberOfcartItem: state.cart.addedIds.length
})

export default connect(mapStateToProps)(NavbarContainer)
