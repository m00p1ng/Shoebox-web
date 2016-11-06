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
      <label>Browser Select</label>
      <select className="browser-default">
        <option value="" disabled>Choose your option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    </div>
 </div>
)

export default RegisterPersonalInfo
