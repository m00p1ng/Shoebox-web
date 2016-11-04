import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LogoutApp } from '../../components'
import { onLogout } from '../../actions/user'
import { browserHistory } from 'react-router'
import { URL_ROOT } from 'endpoint'

class LogoutAppContainer extends Component {
  componentDidMount() {
    this.props.onLogout()
    browserHistory.push(`${URL_ROOT}`)
  }

  render() {
    return (
      <LogoutApp />
    )
  }
}

const mapDispatchToProps = ({
  onLogout
})

export default connect(null, mapDispatchToProps)(LogoutAppContainer)