import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import ErrorMsg from './ErrorMsg'

const LoginForm = (props) => {
  const {
    handleSubmit,
    sendLoginForm,
    errorMsg
  } = props
  return(
    <div className="card brown lighten-5" id="sbox-login-card">
      <div className="card-content">
        <form onSubmit={handleSubmit(sendLoginForm)}>
          <div className="form-style-6" id="sbox-login-form">
            <div className="row">
              <img
                id="sbox-login-logo"
                className="responsive-img"
                src="/static/images/shoebox_logo.png" />
              <ErrorMsg errorMsg={errorMsg} />

              <div className="input-field">
                <Field
                  name="username"
                  component="input"
                  className="sbox-login-input"
                  type="text"
                  placeholder="Username"/>
              </div>
            </div>

            <div className="row">
              <div className="input-field">
                <Field
                  name="password"
                  component="input"
                  className="sbox-login-input"
                  type="password"
                  placeholder="Password"/>
              </div>
            </div>

            <div className="row">
              <button
                id="sbox-login-button"
                className="waves-effect waves-light btn-large"
                type="submit">Login
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'login'
})(LoginForm)
