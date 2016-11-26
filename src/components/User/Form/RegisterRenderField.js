import React from 'react'

const RegisterRenderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div className="row sb-register-row">
    <div className="col l2 offset-l3 m2 offset-m2 s2 offset-s1">
      <div className="sb-shop-med-text">
        {label}:
      </div>
    </div>
    <div className="col l4 m6 s8">
      <input
        className={(touched && error)? "sbox-register-danger" : ""}
        {...input}
        type={type}/>
    </div>
    {touched && error && <span>{error}</span>}
  </div>
)

export default RegisterRenderField
