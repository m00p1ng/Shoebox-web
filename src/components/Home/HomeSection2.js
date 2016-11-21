import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const HomeSection2 = () => (
  <div className="section white" >
    <div className="row container center" >
      <h4 className="sb-bold">Happiness that you can buy.</h4>
      <h3 className="sb-bold">Shoebox</h3>
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
