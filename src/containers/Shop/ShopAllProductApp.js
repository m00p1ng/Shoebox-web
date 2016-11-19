import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ShopAllProductApp } from '../../components'

class ShopAllProductAppContainer extends Component {
  render() {
    return (
      <ShopAllProductApp />
    )
  }
}

export default connect()(ShopAllProductAppContainer)
