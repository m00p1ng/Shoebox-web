import React from 'react'
import { reduxForm, Field } from 'redux-form'
import RegisterRenderField from './RegisterRenderField'
import RegisterValidate from './RegisterValidate'
import RegisterHeader from './RegisterHeader'


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

      <RegisterHeader />

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

        <div className="row sb-register-row">
          <div className="col l9 m10 s11">
            <div className="right">

            <button
              type="button"
              className="btn waves-effect waves-light grey lighten-1"
              onClick={previousPage}>
                Previous
            </button>
            {' '}

              <button
                type="submit"
                className="waves-effect waves-light btn orange darken-3"
                disabled={invalid || submitting}>
                  Next
              </button>
            </div>
          </div>
        </div>
    </form>
  )
}
export default reduxForm({
  form: "register",
  destroyOnUnmount: false,
  validate: RegisterValidate
})(RegisterCreditCard)
