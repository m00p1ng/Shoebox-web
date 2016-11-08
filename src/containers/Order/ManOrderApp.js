import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ManOrderApp } from '../../components'

class ManOrderAppContainer extends Component {
  render() {
    return (
      <ManOrderApp />
    )
  }
}

export default connect()(ManOrderAppContainer)
