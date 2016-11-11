import React from 'react'
import RegisterAccount from './RegisterAccount'
import RegisterPersonalInfo from './RegisterPersonalInfo'
import RegisterAddress from './RegisterAddress'
import RegisterShipAddress from './RegisterShipAddress'
import RegisterCreditCard from './RegisterCreditCard'

const RegisterForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting
}) => (
  <form onSubmit={handleSubmit}>
    <RegisterAccount />
    <br />
    <RegisterPersonalInfo />
    <br />
    <RegisterAddress />
    <br />
    <RegisterShipAddress />
    <br />
    <RegisterCreditCard />
    <div className="row">
      <button
        className="waves-effect waves-light btn"
        type="submit"
        disabled={pristine || submitting}>
        Register
      </button>
      <button
        className="waves-effect waves-light btn"
        type="button"
        disabled={pristine || submitting}
        onClick={reset}>
          Clear Values
      </button>
    </div>
  </form>
)

export default RegisterForm
