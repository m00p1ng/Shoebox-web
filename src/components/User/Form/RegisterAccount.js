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

      <div className="ui steps">
        <div className="step">
          <i className="truck icon"></i>
          <div className="content">
            <div className="title">Shipping</div>
            <div className="description">Choose your shipping options</div>
          </div>
        </div>
        <div className="active step">
          <i className="payment icon"></i>
          <div className="content">
            <div className="title">Billing</div>
            <div className="description">Enter billing information</div>
          </div>
        </div>
        <div className="disabled step">
          <i className="info icon"></i>
          <div className="content">
            <div className="title">Confirm Order</div>
          </div>
        </div>
      </div>

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
