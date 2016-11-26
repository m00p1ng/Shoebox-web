import React from 'react'
import { reduxForm, Field } from 'redux-form'
import RegisterRenderField from './RegisterRenderField'
import RegisterValidate from './RegisterValidate'

const RegisterAccount = (props) => {
  const { handleSubmit, submitting, invalid } = props
  return (
    <form
      onSubmit={handleSubmit}
      className="form-style-6 sb-register-form">

      <div className="row center">
        <div className="sb-register-header sb-bold">Register</div>
      </div>

      <Field
        name="username"
        component={RegisterRenderField}
        type="text"
        label="Username"/>

      <Field
        name="password"
        component={RegisterRenderField}
        type="password"
        label="Password"/>

      <Field
        name="repassword"
        component={RegisterRenderField}
        type="password"
        label="Re password"/>

      {/* <Field
        name="picture"
        component={RegisterRenderField}
        type="text"
        label="Picture"/> */}

      <div className="row sb-register-row">
        <div className="col l9">
          <div className="right">
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
})(RegisterAccount)
