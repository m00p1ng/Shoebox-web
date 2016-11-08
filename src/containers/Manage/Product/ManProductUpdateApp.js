import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManProductUpdateApp } from '../../../components'

class ManProductUpdateAppContainer extends Component {
  render() {
    return (
      <ManProductUpdateApp />
    )
  }
}

export default connect()(ManProductUpdateAppContainer)
