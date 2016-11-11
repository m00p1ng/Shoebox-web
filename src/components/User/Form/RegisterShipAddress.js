import React from 'react'
import { Field } from 'redux-form'

const RegisterShipAddress = () => (
  <div>
    <p>Ship Address:</p>

    <div className="row">
      <label>City</label>
      <Field name="ship.city" component="input" type="text"/>
    </div>

    <div className="row">
      <label>District</label>
      <Field name="ship.district" component="input" type="text"/>
    </div>

    <div className="row">
      <label>Street</label>
      <Field name="ship.street" component="input" type="text"/>
    </div>

    <div className="row">
      <label>Zipcode</label>
      <Field name="ship.zipcode" component="input" type="text"/>
    </div>
  </div>
)

export default RegisterShipAddress
