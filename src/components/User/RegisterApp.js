import React from 'react'
import ErrorMsg from './Form/ErrorMsg'
import RegisterForm from './Form/RegisterForm'

const RegisterApp = ({
  handleSubmit,
  reset,
  submitting,
  pristine,
  errorMsg
}) => (
  <div className="row">
    <h1>Register</h1>
    <div className="col s6 offset-s3">
      {/* <ErrorMsg errorMsg={errorMsg} /> */}
      <RegisterForm
        handleSubmit={handleSubmit}
        reset={reset}
        submitting={submitting}
        pristine={pristine}
        />
    </div>
  </div>
)

export default RegisterApp
