import React from 'react'
import ErrorMsg from './Form/ErrorMsg'
import RegisterForm from './Form/RegisterForm'
import HeaderBarApp from '../App/HeaderBarApp'

const RegisterApp = ({
  handleSubmit,
  reset,
  submitting,
  pristine,
  errorMsg
}) => (
  <div>
    <HeaderBarApp
      title="Register"
      link="register"/>
    <div className="row">
      <div className="col s6 offset-s3">
        <RegisterForm
          handleSubmit={handleSubmit}
          reset={reset}
          submitting={submitting}
          pristine={pristine}
          />
      </div>
    </div>
</div>
)

export default RegisterApp
