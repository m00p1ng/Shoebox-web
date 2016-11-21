import React, { Component, PropTypes } from 'react'
import { CheckoutSuccessApp } from '../../components'
import { browserHistory } from 'react-router'
import { URL_ROOT } from 'endpoint'

class CheckoutSuccessAppContainer extends Component {
  componentDidMount() {
    setTimeout(() => browserHistory.push(`${URL_ROOT}`), 3000)
  }

  render() {
    return (
      <CheckoutSuccessApp />
    )
  }
}


export default CheckoutSuccessAppContainer
