import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RegisterApp } from '../../components'

class RegisterAppContainer extends Component {
  render() {
    return (
      <RegisterApp />
    )
  }
}

export default connect()(RegisterAppContainer)
