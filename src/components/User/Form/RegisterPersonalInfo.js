import React from 'react'
import { reduxForm, Field } from 'redux-form'
import RegisterRenderField from './RegisterRenderField'
import RegisterValidate from './RegisterValidate'
import RegisterHeader from './RegisterHeader'


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
    <form
      onSubmit={handleSubmit}
      className="form-style-6 sb-register-form">

      <RegisterHeader />

      <div className="row">
        <div className="col l12 center">
          <span className="sb-register-progress-header sb-bold">Personal Information</span>
        </div>
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

        {/* My unwork code */}

        {/* <div className="row sb-register-birthday-group">
          <div className="col l6 offset-l3">
            <div className="sb-register-sub-header">Birthday</div>
            Date<select id="date" name="dd"></select>
    				Month<select id="month" name="mm"></select>
    			  Year<select id="year" name="yyyy"></select>
    				<script type="text/javascript">date_populate("date", "month", "year");</script>
          </div>
        </div> */}

        <div className="row sb-register-birthday-group">
          <div className="col l6 offset-l3">
          <div className="sb-register-sub-header">BirthDay</div>
            <div className="row">
              <div className="col l4">
                <span>Day</span>
              </div>
            <div className="col l8">
            <Field
              name="birthday.day"
              component="input"
              type="text"/>
            </div>
            <br />
            <div className="col l4">
              <span>Month</span>
            </div>
            <div className="col l8">
            <Field
              name="birthday.month"
              component="input"
              type="text"/>
            </div>
            <br />
            <div className="col l4">
              <span>Year</span>
            </div>
            <div className="col l8">
            <Field
              name="birthday.year"
              component="input"
              type="text"/>
            </div>
          </div>
        </div>
      </div>

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

      <div className="row sb-register-row">
        <div className="col l9 m10 s11">
          <div className="right">

          <button
            type="button"
            className="btn waves-effect waves-light orange"
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
})(RegisterPersonalInfo)
