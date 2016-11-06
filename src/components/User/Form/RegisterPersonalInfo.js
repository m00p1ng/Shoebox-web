import React from 'react'

const RegisterPersonalInfo = () => (
  <div>
    <p>PersonalInfo:</p>

    <input id="firstname" type="text"/>
    <label>First Name</label>

    <input id="lastname" type="text"/>
    <label>Last Name</label>

    <input id="email" type="email"/>
    <label>E-mail</label>

    <input id="phone" type="text"/>
    <label>Phone</label>

    <select className="browser-default">
      <option defaultValue="" disabled>---</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
    </select>
    <label>Gender</label>


    <input type="date" className="datepicker"/>
    <label>Birthday</label>
  </div>
)

export default RegisterPersonalInfo
