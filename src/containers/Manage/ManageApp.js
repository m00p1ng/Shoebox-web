import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManageApp } from '../../components'

class ManageAppContainer extends Component {
  render() {
    return (
      <ManageApp />
    )
  }
}

export default connect()(ManageAppContainer)
