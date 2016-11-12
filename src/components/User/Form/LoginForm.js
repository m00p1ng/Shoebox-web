import React, { PropTypes } from 'react'
import ErrorMsg from './ErrorMsg'

const LoginForm = ({
  onUsernameChange,
  onPasswordChange,
  handleSubmit,
  errorMsg
}) => (
  <form onSubmit={handleSubmit}>
    <div className="form-style-6">
      <div className="row">
        <img
          id="sbox-login-logo"
          className="responsive-img"
          src="/static/images/shoebox_logo.png" />
        <ErrorMsg errorMsg={errorMsg} />
        <div className="input-field">
          <input
          id="sb_username"
          type="text"
          placeholder="Username"
          onChange={onUsernameChange} />
        </div>
      </div>
      <div className="row">
        <div className="input-field">
          <input
            id="sb_password"
            type="password"
            placeholder="Password"
            onChange={onPasswordChange}/>
        </div>
      </div>
      <div className="row">
        <button
          className="waves-effect waves-light btn"
          type="submit"
          onClick={handleSubmit}>Login</button>
      </div>
    </div>
  </form>
)

export default LoginForm
