import React from 'react'
import { Field } from 'redux-form'

const RegisterAddress = () => (
  <div>
    <p>Address:</p>

    <div className="row">
      <label>City</label>
      <Field name="address.city" component="input" type="text"/>
    </div>

    <div className="row">
      <label>District</label>
      <Field name="address.district" component="input" type="text"/>
    </div>

    <div className="row">
      <label>Street</label>
      <Field name="address.street" component="input" type="text"/>
    </div>

    <div className="row">
      <label>Zipcode</label>
      <Field name="address.zipcode" component="input" type="text"/>
    </div>
  </div>
)

export default RegisterAddress
