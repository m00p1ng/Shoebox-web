import React from 'react'
import { Field } from 'redux-form'

const RegisterCreditCard = () => (
  <div>
    <p>Credit Card Info:</p>

    <div className="row">
      <label>Number:</label>
      <Field name="credit.id" component="input" type="text"/>
    </div>

    <div className="row">
      <label>Type:</label>
      <Field name="credit.type" component="input" type="text"/>
    </div>

    <div className="row">
      <label>EXP:</label>
      <Field name="credit.exp" component="input" type="text"/>
    </div>
  </div>
)

export default RegisterCreditCard
