import React from 'react'
import RegisterAccountInfo from './RegisterAccountInfo'
import RegisterPersonalInfo from './RegisterPersonalInfo'

const RegisterForm = ({
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <RegisterAccountInfo />
    <RegisterPersonalInfo />
    <button
      className="waves-effect waves-light btn"
      type="submit"
      onClick={handleSubmit}>Login</button>
  </form>
)

export default RegisterForm
