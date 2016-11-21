import React, { Component, PropTypes } from 'react'
import { RegisterSuccessApp } from '../../components'
import { browserHistory } from 'react-router'
import { URL_ROOT } from 'endpoint'

class RegisterSuccessAppContainer extends Component {
  componentDidMount() {
    setTimeout(() => browserHistory.push(`${URL_ROOT}`), 3000)
  }

  render() {
    return (
      <RegisterSuccessApp />
    )
  }
}


export default RegisterSuccessAppContainer
