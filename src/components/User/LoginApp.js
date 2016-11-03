import React from 'react'

const LoginApp = ({onUsernameChange, onPasswordChange, onLogin , errorMsg}) => (
  // <form>
  <div className="row">
    <h1>Login</h1>
    <div className="col s6 offset-s3">
      {
        (errorMsg !== '') ? (
        <div className="card-panel teal">
          <span className="white-text">
            {errorMsg}
          </span>
        </div>
        ): (<span></span>)
      }
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
        type="submits"
        onClick={onLogin}>Login</button>
    </div>
  </div>
  // </form>
)

export default LoginApp
