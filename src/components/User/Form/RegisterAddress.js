import React from 'react'

const RegisterAddress = () => (
  <div>
    <p>Address:</p>

    <div className="row">
      <label>City</label>
      <input id="address-city" type="text"/>
    </div>

    <div className="row">
      <label>District</label>
      <input id="address-district" type="text"/>
    </div>

    <div className="row">
      <label>Street</label>
      <input id="address-street" type="text"/>
    </div>

    <div className="row">
      <label>Zipcode</label>
      <input id="address-zipcode" type="text"/>
    </div>
  </div>
)

export default RegisterAddress
