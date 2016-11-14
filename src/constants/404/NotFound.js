import React from 'react'
import { URL_ROOT } from 'endpoint'
import { Link } from 'react-router'

const NotFound = () => (
  <div className="container">
    <img
      id="sbox-login-logo"
      className="responsive-img"
      src="/static/images/shoebox_logo.png" />
    <h1>NotFound</h1>
    <Link to={`${URL_ROOT}`}>
      <button className="btn">Go to Home</button>
    </Link>
  </div>
)

export default NotFound
