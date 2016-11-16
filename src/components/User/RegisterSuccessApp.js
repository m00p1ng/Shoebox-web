import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const RegisterSuccessApp = () => (
  <div className="container">
    <h1>Register Success</h1>
    <h3>Please wait to redirect to
      {' '}
      <Link to={`${URL_ROOT}`}>
        Home
      </Link>
      {' '}
      or
      {' '}
      <Link to={`${URL_ROOT}/login`}>
        Login
      </Link>
    </h3>
  </div>
)

export default RegisterSuccessApp
