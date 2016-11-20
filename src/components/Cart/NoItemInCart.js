import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const NoItemInCart = () => (
  <div>
    <div className="card grey lighten-4">
      <div className="card-content">
        <div className="center-align">
          <div className="row">
            <i className="material-icons sbox-giant-icon sbox-icon-gray">
              shopping_basket
            </i>
            <h4 className="grey-text text-darken-1">
              No Items in Cart now
            </h4>
          </div>
          <div className="row">
            <Link to={`${URL_ROOT}/shop`}>
              <button
                className="waves-effect waves-light btn-large orange draken-3">
                Go to shop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default NoItemInCart
