import React from 'react'
import { reduxForm, Field } from 'redux-form'
import RegisterRenderField from './RegisterRenderField'

const renderError = ({ meta: { touched, error } }) => touched && error ?
  <span>{error}</span> : false

const RegisterPersonalInfo = (props) => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <p>Personal Info:</p>

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

      <div className="row">
        <label>Gender</label>
        <div>
          <label><Field name="gender" component="input" type="radio" value="male"/> Male</label>
          <label><Field name="gender" component="input" type="radio" value="female"/> Female</label>
          <Field name="gender" component={renderError}/>
        </div>
      </div>

      <div className="row">
        <label>Birthday</label>
        <div className="row">
          <Field name="birthday.day" component="input" type="text"/>
        </div>
        <div className="row">
          <Field name="birthday.month" component="input" type="text"/>
        </div>
        <div className="row">
          <Field name="birthday.year" component="input" type="text"/>
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

      <div>
        <button type="button" className="previous" onClick={previousPage}>Previous</button>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: "register",
  destroyOnUnmount: false
})(RegisterPersonalInfo)
