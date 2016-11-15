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

  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    this.props.resetErrorMsg()
    this.props.onLogout()
  }

  onUsernameChange(event) {
    this.setState({username: event.target.value})
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onLogin({
      username: this.state.username,
      password: this.state.password
    })
    .then(() => {
      if(this.props.role.toLowerCase() === 'customer')
        this.props.getCustomerDetail(this.props.user)
      else if(this.props.role.toLowerCase() === 'employee')
        this.props.getEmployeeDetail(this.props.user)
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
        onUsernameChange={this.onUsernameChange.bind(this)}
        onPasswordChange={this.onPasswordChange.bind(this)}
        handleSubmit={this.handleSubmit.bind(this)}
        errorMsg={this.props.errorMsg}
      />
    )
  }
}

const mapStatetoProps = (state) => ({
  errorMsg: state.user.errorMsg,
  user: state.user.username,
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
