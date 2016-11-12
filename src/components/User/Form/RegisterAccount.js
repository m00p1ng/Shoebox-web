import React from 'react'
import { reduxForm, Field } from 'redux-form'
import RegisterRenderField from './RegisterRenderField'

const RegisterAccount = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <p>Account Info:</p>

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
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: "register",
  destroyOnUnmount: false,
})(RegisterAccount)
