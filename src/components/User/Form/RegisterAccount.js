import React from 'react'
import { reduxForm, Field } from 'redux-form'
import RegisterRenderField from './RegisterRenderField'
import RegisterValidate from './RegisterValidate'

const RegisterAccount = (props) => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={handleSubmit}>

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

      <Field
        name="picture"
        component={RegisterRenderField}
        type="text"
        label="Picture"/>

      <div>
        <button type="submit" className="btn" disabled={pristine || submitting}>Next</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: "register",
  destroyOnUnmount: false,
  validate: RegisterValidate
})(RegisterAccount)
