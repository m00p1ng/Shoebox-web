import React, { PropTypes } from 'react'
import LoginForm from './Form/LoginForm'
import ErrorMsg from './ErrorMsg'

const LoginApp = ({
  onUsernameChange,
  onPasswordChange,
  handleSubmit,
  errorMsg
}) => (
  <div className="row">
    <h1>Login</h1>
    <div className="col s6 offset-s3">
      <ErrorMsg errorMsg={errorMsg} />
      <LoginForm
        onUsernameChange={onUsernameChange}
        onPasswordChange={onPasswordChange}
        handleSubmit={handleSubmit}
      />
    </div>
  </div>
)

LoginApp.propTypes = {
  onUsernameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMsg: PropTypes.string
}

export default LoginApp
