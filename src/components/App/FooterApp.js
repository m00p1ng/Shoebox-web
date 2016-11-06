import React from 'react'
import { Link } from 'react-router'

import { URL_ROOT } from 'endpoint'

const FooterApp = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Shoebox</h5>
          <p className="grey-text text-lighten-4">Shoes love the loving one.</p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Get to know us</h5>
          <ul>
            <li><a className="grey-text text-lighten-3" href="#!">About</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Contact us</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      Shoebox &copy; 2016 Copyright.
      </div>
    </div>
  </div>
)

export default FooterApp
