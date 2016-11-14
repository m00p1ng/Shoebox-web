import React, { PropTypes } from 'react'
import LoginForm from './Form/LoginForm'

const LoginApp = ({
  onUsernameChange,
  onPasswordChange,
  handleSubmit,
  errorMsg
}) => (
  <div className="row">
    <div className="col l6 offset-l3 m10 offset-m1 s12">
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
