import React from 'react'

const RegisterAccountInfo = ({
  onUsernameChange,
  onPasswordChange,
  onRePasswordChange
}) => (
  <div>
    <p>Account Info:</p>

    <div className="row">
      <label>Username</label>
      <input id="username" type="text"/>
    </div>

    <div className="row">
      <label>Password</label>
      <input id="password" type="password"/>
    </div>

    <div className="row">
      <label>Re password</label>
      <input id="repassword" type="password"/>
    </div>
  </div>
)

export default RegisterAccountInfo
