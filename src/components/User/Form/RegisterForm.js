import React from 'react'
import RegisterAccount from './RegisterAccount'
import RegisterPersonalInfo from './RegisterPersonalInfo'

const RegisterForm = ({
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <RegisterAccount />
    <RegisterPersonalInfo />
    <div className="row">
      <button
        className="waves-effect waves-light btn"
        type="submit"
        onClick={handleSubmit}>Login</button>
    </div>
  </form>
)

export default RegisterForm
