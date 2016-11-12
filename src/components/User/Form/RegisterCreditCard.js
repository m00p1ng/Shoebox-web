import React from 'react'
import { reduxForm, Field } from 'redux-form'
import RegisterRenderField from './RegisterRenderField'

const RegisterCreditCard = (props) => {
  const { handleSubmit, pristine, previousPage, submitting, sendRegisterForm } = props
  return (
    <form onSubmit={handleSubmit(sendRegisterForm)}>
      <p>Credit Card Info:</p>

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

      <div>
        <button type="button" className="previous" onClick={previousPage}>Previous</button>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  )
}
export default reduxForm({
  form: "register",
  destroyOnUnmount: false
})(RegisterCreditCard)
