import React, { PropTypes } from 'react'

const LoginForm = ({
  onUsernameChange,
  onPasswordChange,
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <div className="row">
      <div className="input-field">
        <label>Username</label>
        <input
        id="sb_username"
        type="text"
        className="validate"
        onChange={onUsernameChange} />
      </div>
      <div className="input-field">
        <label>Password</label>
        <input
          id="sb_password"
          type="password"
          className="validate"
          onChange={onPasswordChange}/>
      </div>
      <button
        className="waves-effect waves-light btn"
        type="submit"
        onClick={handleSubmit}>Login</button>
    </div>
  </form>
)

export default LoginForm
