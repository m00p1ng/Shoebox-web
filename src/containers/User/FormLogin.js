import React, { Component } from 'react'
import axios from 'axios'
import { FormLogin } from '../../components'

export default class FormLoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.onUsernameChange = this.onUsernameChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onLogin = this.onLogin.bind(this)
  }

  onUsernameChange(event) {
    this.setState({username: event.target.value})
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value})
  }

  onLogin() {
    const API_URL = '/api/login'
    axios.post(API_URL, {
      username : this.state.username,
      password : this.state.password
    }).then(res => {
      localStorage.setItem('token', res.data.token);
      console.log(res.data.token)
    })
  }

  render() {
    return(
      <FormLogin
        onUsernameChange={this.onUsernameChange}
        onPasswordChange={this.onPasswordChange}
        onLogin={this.onLogin}
      />
    )
  }
}
