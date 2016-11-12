import React from 'react'
import { reduxForm, Field } from 'redux-form'
import RegisterRenderField from './RegisterRenderField'

const RegisterShipAddress = (props) => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <p>Ship Address:</p>

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
})(RegisterShipAddress)
