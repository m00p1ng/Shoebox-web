import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProfileApp } from '../../components'

class ProfileAppContainer extends Component {
  render() {
    return (
      <ProfileApp
        user={this.props.user}/>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user.detail
})

export default connect(
  mapStateToProps
)(ProfileAppContainer)
