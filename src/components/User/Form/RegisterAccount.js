import React from 'react'
import { Field } from 'redux-form'

const RegisterAccount = () => (
  <div>
    <p>Account Info:</p>

    <div className="row">
      <label>Username</label>
      <Field name="username" component="input" type="text"/>
    </div>

    <div className="row">
      <label>Password</label>
      <Field name="password" component="input" type="password"/>
    </div>

    <div className="row">
      <label>Re password</label>
      <Field name="repassword" component="input" type="password"/>
    </div>

    <div className="row">
      <label>Picture</label>
      <Field name="picture" component="input" type="text"/>
    </div>
  </div>
)

export default RegisterAccount
