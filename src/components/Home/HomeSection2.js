import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const HomeSection2 = () => (
  <div className="section white" >
    <div className="row container center" >
      <h4>You can't buy happiness, but you can buy shoes.</h4>
      <h4>And that's kind of the same thing.</h4>
      <div className="sb-home-shop-now-btn" >
        <Link
          to={`${URL_ROOT}/shop`}
          className="waves-effect waves-light btn-large orange draken-3">
          SHOP NOW
        </Link>
      </div>
    </div>
  </div>
);

export default HomeSection2
