import React from 'react'

const RegisterAddress = () => (
  <div>
    <p>Ship Address:</p>

    <div className="row">
      <label>City</label>
      <input id="ship-city" type="text"/>
    </div>

    <div className="row">
      <label>District</label>
      <input id="ship-district" type="text"/>
    </div>

    <div className="row">
      <label>Street</label>
      <input id="ship-street" type="text"/>
    </div>

    <div className="row">
      <label>Zipcode</label>
      <input id="ship-zipcode" type="text"/>
    </div>
  </div>
)

export default RegisterAddress
