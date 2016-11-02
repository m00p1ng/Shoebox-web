import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LogoutApp } from '../../components'

class LogoutAppContainer extends Component {
  render() {
    return (
      <LogoutApp />
    )
  }
}

export default connect()(LogoutAppContainer)
