import React from 'react'
import { reduxForm, Field } from 'redux-form'
import RegisterRenderField from './RegisterRenderField'
import RegisterValidate from './RegisterValidate'

const RegisterCreditCard = (props) => {
  const {
    handleSubmit,
    previousPage,
    invalid,
    submitting,
    sendRegisterForm
  } = props

  return (
    <form
      onSubmit={handleSubmit(sendRegisterForm)}
      className="form-style-6 sb-register-form">

      <div className="row center">
        <div className="sb-register-header sb-bold">Register</div>
      </div>

      <Field
        name="credit.id"
        component={RegisterRenderField}
        type="text"
        label="Number"/>

      <Field
        name="credit.type"
        component={RegisterRenderField}
        type="text"
        label="Type"/>

      <Field
        name="credit.exp"
        component={RegisterRenderField}
        type="text"
        label="EXP"/>

      <div>
        <button
          type="button"
          className="btn"
          onClick={previousPage}>
            Previous
        </button>
        {' '}
        <button
          type="submit"
          className="btn"
          disabled={invalid || submitting}>
            Submit
        </button>
      </div>
    </form>
  )
}
export default reduxForm({
  form: "register",
  destroyOnUnmount: false,
  validate: RegisterValidate
})(RegisterCreditCard)
