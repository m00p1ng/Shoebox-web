import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const NoItemInCart = () => (
  <div>
    <div className="card grey lighten-4">
      <div className="card-content">
        <div className="center-align">
          <i className="large material-icons sbox-giant-icon sbox-icon-gray">
            shopping_basket
          </i>
          <h5>No Items in Cart now</h5>
          <Link to={`${URL_ROOT}/shop`}>
            <button className="waves-effect waves-light btn-large orange draken-3">Go to shop</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default NoItemInCart
