import React, { PropTypes } from 'react'
import LoginForm from './Form/LoginForm'

const LoginApp = ({
  onUsernameChange,
  onPasswordChange,
  handleSubmit,
  errorMsg
}) => (
  <div className="row">
    <div className="col s6 offset-s3">
      <LoginForm
        onUsernameChange={onUsernameChange}
        onPasswordChange={onPasswordChange}
        errorMsg={errorMsg}
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
