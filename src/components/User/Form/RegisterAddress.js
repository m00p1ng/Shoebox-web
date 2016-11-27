import React from 'react'
import { reduxForm, Field } from 'redux-form'
import RegisterRenderField from './RegisterRenderField'
import RegisterValidate from './RegisterValidate'

const RegisterAddress = (props) => {
  const { handleSubmit, previousPage, invalid, submitting } = props
  return(
    <form
      onSubmit={handleSubmit}
      className="form-style-6 sb-register-form">

      <div className="row center">
        <div className="sb-register-header sb-bold">Register</div>
      </div>

      <Field
        name="address.city"
        component={RegisterRenderField}
        type="text"
        label="City"/>

      <Field
        name="address.district"
        component={RegisterRenderField}
        type="text"
        label="District"/>

      <Field
        name="address.street"
        component={RegisterRenderField}
        type="text"
        label="Street"/>

      <Field
        name="address.zipcode"
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
})(RegisterAddress)
