import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { LoginApp } from '../../components'
import {
  onLogin,
  onLogout,
  getCustomerDetail,
  getEmployeeDetail,
  resetErrorMsg
} from '../../actions/user'
import { URL_ROOT } from 'endpoint'

class LoginAppContainer extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string,
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
    resetErrorMsg: PropTypes.func
  }

  componentDidMount() {
    this.props.resetErrorMsg()
    this.props.onLogout()
  }

  sendLoginForm(values) {
    if(!values.username) {
      values['username'] = ''
    }
    if(!values.password) {
      values['password'] = ''
    }
    this.props.onLogin(values)
    .then(() => {
      if(this.props.role.toLowerCase() === 'customer')
        this.props.getCustomerDetail(this.props.username)
      else if(this.props.role.toLowerCase() === 'employee')
        this.props.getEmployeeDetail(this.props.username)
    })
    .then(() =>{
      if(this.props.isLoggedIn === true) {
        browserHistory.push(`${URL_ROOT}`)
      }
    })
  }

  render() {
    return(
      <LoginApp
        sendLoginForm={this.sendLoginForm.bind(this)}
        errorMsg={this.props.errorMsg}
      />
    )
  }
}

const mapStatetoProps = (state) => ({
  errorMsg: state.user.errorMsg,
  username: state.user.username,
  role: state.user.role,
  isLoggedIn: state.user.isLoggedIn
})

const mapDispatchToProps = ({
  onLogin,
  onLogout,
  getCustomerDetail,
  getEmployeeDetail,
  resetErrorMsg
})

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(LoginAppContainer)
