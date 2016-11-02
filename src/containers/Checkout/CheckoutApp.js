import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CheckoutApp } from '../../components'

class CheckoutAppContainer extends Component {
  render() {
    return (
      <CheckoutApp />
    )
  }
}

export default connect()(CheckoutAppContainer)
