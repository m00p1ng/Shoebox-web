import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ShopApp } from '../../components'

class ShopAppContainer extends Component {
  render() {
    return (
      <ShopApp />
    )
  }
}

export default connect()(ShopAppContainer)
