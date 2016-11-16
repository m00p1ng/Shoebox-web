import React, { PropTypes } from 'react'
import LoginForm from './Form/LoginForm'

const LoginApp = ({
  sendLoginForm,
  errorMsg
}) => (
  <div className="row">
    <div className="col l6 offset-l3 m10 offset-m1 s12">
      <LoginForm
        errorMsg={errorMsg}
        sendLoginForm={sendLoginForm}
      />
    </div>
  </div>
)

LoginApp.propTypes = {
  sendLoginForm: PropTypes.func.isRequired,
  errorMsg: PropTypes.string
}

export default LoginApp
