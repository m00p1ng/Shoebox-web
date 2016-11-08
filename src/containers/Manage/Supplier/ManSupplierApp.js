import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManSupplierApp } from '../../../components'

class ManSupplierAppContainer extends Component {
  render() {
    return (
      <ManSupplierApp />
    )
  }
}

export default connect()(ManSupplierAppContainer)
