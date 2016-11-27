import React from 'react'
import { reduxForm, Field } from 'redux-form'
import RegisterRenderField from './RegisterRenderField'
import RegisterValidate from './RegisterValidate'
import RegisterHeader from './RegisterHeader'

const RegisterShipAddress = (props) => {
  const {
    handleSubmit,
    previousPage,
    invalid,
    submitting
  } = props

  return (
    <form
      onSubmit={handleSubmit}
      className="form-style-6 sb-register-form">

      <RegisterHeader />

      Shipping Address

      <Field
        name="ship.city"
        component={RegisterRenderField}
        type="text"
        label="City"/>

      <Field
        name="ship.district"
        component={RegisterRenderField}
        type="text"
        label="District"/>

      <Field
        name="ship.street"
        component={RegisterRenderField}
        type="text"
        label="Street"/>

      <Field
        name="ship.zipcode"
        component={RegisterRenderField}
        type="text"
        label="Zipcode"/>

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
})(RegisterShipAddress)
