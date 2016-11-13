import React, { PropTypes } from 'react'
import ErrorMsg from './ErrorMsg'

const LoginForm = ({
  onUsernameChange,
  onPasswordChange,
  handleSubmit,
  errorMsg
}) => (
  <div className="card brown lighten-5" id="sbox-login-card">
    <div className="card-content">
      <form onSubmit={handleSubmit}>
        <div className="form-style-6" id="sbox-login-form">
          <div className="row">
            <img
              id="sbox-login-logo"
              className="responsive-img"
              src="/static/images/shoebox_logo.png" />
            <ErrorMsg errorMsg={errorMsg} />

            <div className="input-field">
              <input
              id="sb_username"
              className="sbox-login-input"
              type="text"
              placeholder="Username"
              onChange={onUsernameChange} />
            </div>
          </div>

          <div className="row">
            <div className="input-field">
              <input
                id="sb_password"
                className="sbox-login-input"
                type="password"
                placeholder="Password"
                onChange={onPasswordChange}/>
            </div>
          </div>

          <div className="row">
            <button
              id="sbox-login-button"
              className="waves-effect waves-light btn-large"
              type="submit"
              onClick={handleSubmit}>Login
            </button>
          </div>
          
        </div>
      </form>
    </div>
  </div>
)

export default LoginForm
