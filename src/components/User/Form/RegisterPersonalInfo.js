import React from 'react'
import { reduxForm, Field } from 'redux-form'
import RegisterRenderField from './RegisterRenderField'
import RegisterValidate from './RegisterValidate'

const renderError = ({ meta: { touched, error } }) => touched && error ?
  <span>{error}</span> : false

const RegisterPersonalInfo = (props) => {
  const {
    handleSubmit,
    previousPage,
    invalid,
    submitting
  } = props

  return (
    <form onSubmit={handleSubmit}
      className="form-style-6 sb-register-form">

      <div className="row center">
        <div className="sb-register-header sb-bold">Register</div>
      </div>

      <Field
        name="firstname"
        component={RegisterRenderField}
        type="text"
        label="Firstname"/>

      <Field
        name="lastname"
        component={RegisterRenderField}
        type="text"
        label="Lastname"/>

        <div className="row sb-register-radio-group">
          <div className="col l2 offset-l3">
            <div className="sb-register-sub-header">Gender</div>
            <label>
            <Field
              name="gender"
              component="input"
              type="radio"
              value="male"/>
              <div className="sb-radio-choice sb-shop-small-text">Male</div>
              </label>

            <label>
            <Field
              name="gender"
              component="input"
              type="radio"
              value="female"/>
              <div className="sb-radio-choice sb-shop-small-text">Female</div>
            </label>
            <Field name="gender" component={renderError}/>
          </div>
        </div>

        <div className="row sb-register-birthday-group">
          <div className="col l6 offset-l3">
            <div className="sb-register-sub-header">Birthday</div>
            <div>Day:</div>
            <Field
              name="birthday.day"
              component="input"
              type="text"/>
            Month:
            <Field
              name="birthday.month"
              component="input"
              type="text"/>
              Year:
            <Field
              name="birthday.year"
              component="input"
              type="text"/>
          </div>
        </div>

      {/* <div className="row">
        <label>Birthday</label>
        <div className="row">
          <Field
            name="birthday.day"
            component="input"
            type="text"/>
        </div>
        <div className="row">
          <Field
            name="birthday.month"
            component="input"
            type="text"/>
        </div>
        <div className="row">
          <Field
            name="birthday.year"
            component="input"
            type="text"/>
        </div>
      </div> */}

      <Field
        name="email"
        component={RegisterRenderField}
        type="email"
        label="E-mail"/>

      <Field
        name="phone"
        component={RegisterRenderField}
        type="text"
        label="Phone"/>

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
            Next
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: "register",
  destroyOnUnmount: false,
  validate: RegisterValidate
})(RegisterPersonalInfo)
