import React from 'react'

const RegisterRenderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div className="row sb-register-row">
    <div className="col l2 offset-l3">
      <div className="sb-shop-med-text">
        {label}:
      </div>
    </div>
    <div className="col l4">
      <input className={(touched && error)? "sbox-register-danger" : ""} {...input} type={type}/>
    </div>
    {touched && error && <span>{error}</span>}
  </div>
)

export default RegisterRenderField
