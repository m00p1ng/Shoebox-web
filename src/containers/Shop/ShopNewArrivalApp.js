import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ShopNewArrivalApp } from '../../components'

class ShopNewArrivalAppContainer extends Component {
  render() {
    return (
      <ShopNewArrivalApp />
    )
  }
}

export default connect()(ShopNewArrivalAppContainer)
