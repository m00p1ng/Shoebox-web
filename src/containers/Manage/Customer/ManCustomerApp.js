import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManCustomerApp } from '../../../components'

class ManCustomerAppContainer extends Component {
  render() {
    return (
      <ManCustomerApp />
    )
  }
}

export default connect()(ManCustomerAppContainer)
