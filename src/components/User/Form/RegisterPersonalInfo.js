import React from 'react'
import { Field } from 'redux-form'

const RegisterPersonalInfo = () => (
  <div>
    <p>PersonalInfo:</p>

    <div className="row">
      <label>First Name</label>
      <Field name="firstname" component="input" type="text"/>
    </div>

    <div className="row">
      <label>Last Name</label>
      <Field name="lastname" component="input" type="text"/>
    </div>

    <div className="row">
      <label>Gender</label>
      <Field name="gender" component="select">
        <option></option>
        <option value="1">Male</option>
        <option value="2">Female</option>
      </Field>
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

    <div className="row">
      <label>E-mail</label>
      <Field name="email" component="input" type="email"/>
    </div>

    <div className="row">
      <label>Phone</label>
      <Field name="phone" component="input" type="text"/>
    </div>
  </div>
)

export default RegisterPersonalInfo
