import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LogoutApp } from '../../components'
import { onLogout } from '../../actions/user'

class LogoutAppContainer extends Component {
  componentsDidMount() {
    this.props.onLogout()
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
