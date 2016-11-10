import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const NoItemInCart = () => (
  <div>
      <div className="col s12">
        <div className="row">
          <div className="card white">
            <div className="card-content">
               <i className="large material-icons">shopping_basket</i>
               <h5>No Items in Cart now</h5>
               <Link to={`${URL_ROOT}/shop`}>
                  <button>Go to shop</button>
               </Link>
            </div>
          </div>
        </div>
</div>
  </div>
)

export default NoItemInCart
