import React from 'react'

const RegisterPersonalInfo = () => (
  <div>
    <p>PersonalInfo:</p>

    <div className="row">
      <label>First Name</label>
      <input id="firstname" type="text"/>
    </div>

    <div className="row">
      <label>Last Name</label>
      <input id="lastname" type="text"/>
    </div>

    <div className="row">
      <label>Gender</label>
      <select className="browser-default">
        <option defaultValue="" disabled>---</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
      </select>
    </div>

    <div className="row">
      <label>Birthday</label>
      <input type="date" className="datepicker"/>
    </div>

    <div className="row">
      <label>E-mail</label>
      <input id="email" type="email"/>
    </div>

    <div className="row">
      <label>Phone</label>
      <input id="phone" type="text"/>
    </div>
  </div>
)

export default RegisterPersonalInfo
