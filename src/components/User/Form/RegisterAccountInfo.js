import React from 'react'

const RegisterAccountInfo = () => (
  <div>
    Account Info:

    <div className="row">
      <div className="input-field col s6">
       <input
          id="username"
          type="text"
          className="validate" />
       <label htmlFor="username">Username</label>
     </div>
    </div>

    <div className="row">
      <div className="input-field col s6">
       <input
          id="password"
          type="password"
          className="validate" />
       <label htmlFor="password">Password</label>
     </div>
    </div>

    <div className="row">
      <div className="input-field col s6">
       <input
          id="re-password"
          type="text"
          className="validate" />
       <label htmlFor="password">Re password</label>
     </div>
    </div>
  </div>
)

export default RegisterAccountInfo
