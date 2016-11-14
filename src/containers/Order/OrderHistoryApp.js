import React, { Component } from 'react'
import { connect } from 'react-redux'
import { OrderHistoryApp } from '../../components'

class OrderHistoryAppContainer extends Component {
  render() {
    return (
      <OrderHistoryApp />
    )
  }
}

export default connect()(OrderHistoryAppContainer)
