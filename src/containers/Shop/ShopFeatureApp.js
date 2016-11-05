import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ShopFeatureApp } from '../../components'

class ShopFeatureAppContainer extends Component {
  render() {
    return (
      <ShopFeatureApp />
    )
  }
}

export default connect()(ShopFeatureAppContainer)
