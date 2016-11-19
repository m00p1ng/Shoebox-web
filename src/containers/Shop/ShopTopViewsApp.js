import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ShopTopViewsApp } from '../../components'

class ShopTopViewsAppContainer extends Component {
  render() {
    return (
      <ShopTopViewsApp />
    )
  }
}

export default connect()(ShopTopViewsAppContainer)
