import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ShopByBrandApp } from '../../../components'

class ShopByBrandAppContainer extends Component {
  render() {
    return (
      <ShopByBrandApp />
    )
  }
}

export default connect(
)(ShopByBrandAppContainer)
