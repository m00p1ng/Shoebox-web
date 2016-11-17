import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManCustomerCreateApp } from '../../../components'

class ManCustomerCreateAppContainer extends Component {
  render() {
    return (
      <ManCustomerCreateApp />
    )
  }
}

export default connect()(ManCustomerCreateAppContainer)
