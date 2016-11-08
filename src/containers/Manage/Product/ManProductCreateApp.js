import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManProductCreateApp } from '../../../components'

class ManProductCreateAppContainer extends Component {
  render() {
    return (
      <ManProductCreateApp />
    )
  }
}

export default connect()(ManProductCreateAppContainer)
