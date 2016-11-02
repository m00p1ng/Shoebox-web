import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProfileApp } from '../../components'

class ProfileAppContainer extends Component {
  render() {
    return (
      <ProfileApp />
    )
  }
}

export default connect()(ProfileAppContainer)
