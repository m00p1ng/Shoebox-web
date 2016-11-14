import React from 'react'
import { URL_ROOT } from 'endpoint'
import { Link } from 'react-router'

const NotFound = () => (
  <div>
    <h1>NotFound</h1>
    <Link to={`${URL_ROOT}`}>
      <button>Go home</button>
    </Link>
  </div>
)

export default NotFound
