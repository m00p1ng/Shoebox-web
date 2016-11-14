import React from 'react'

const RegisterRenderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div className="row">
    <label>{label}</label>
    <div>
      <input {...input} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

export default RegisterRenderField
