import React from 'react'

const RegisterPersonalInfo = () => (
  <div>
    PersonalInfo:

    <div className="row">
      <div className="input-field col s6">
        <input
          id="firstname"
          type="text"
          className="validate" />
        <label htmlFor="firstname">First Name</label>
      </div>

      <div className="input-field col s6">
        <input
          id="lastname"
          type="text"
          className="validate" />
        <label htmlFor="lastname">Last Name</label>
      </div>
    </div>

    <div className="row">
      <div className="input-field col s6">
       <input
          id="email"
          type="email"
          className="validate" />
       <label htmlFor="email">E-mail</label>
     </div>
    </div>
  </div>
)

//gender
//birthday
//phone


export default RegisterPersonalInfo
