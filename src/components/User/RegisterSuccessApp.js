import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const RegisterSuccessApp = () => (
  <div>
    <h1>Register Success</h1>
    <h3>Please wait to redirect to home
      or
      <Link to={`${URL_ROOT}`}>
        click here
      </Link>
    </h3>
  </div>
)

export default RegisterSuccessApp
