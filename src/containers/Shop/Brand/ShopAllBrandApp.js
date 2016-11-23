import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ShopAllBrandApp } from '../../../components'

class ShopAllBrandAppContainer extends Component {
  render() {
    return (
      <ShopAllBrandApp />
    )
  }
}

export default connect(
)(ShopAllBrandAppContainer)
