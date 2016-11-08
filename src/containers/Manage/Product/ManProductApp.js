import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManProductApp } from '../../../components'

class ManProductAppContainer extends Component {
  render() {
    return (
      <ManProductApp />
    )
  }
}

export default connect()(ManProductAppContainer)
