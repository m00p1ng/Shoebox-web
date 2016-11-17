import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManCustomerUpdateApp } from '../../../components'

class ManCustomerUpdateAppContainer extends Component {
  render() {
    return (
      <ManCustomerUpdateApp />
    )
  }
}

export default connect()(ManCustomerUpdateAppContainer)
