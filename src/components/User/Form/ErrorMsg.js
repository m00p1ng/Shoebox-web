import React, { PropTypes } from 'react'

const ErrorMsg = ({errorMsg}) => (
  <div className="row">
    {
      (errorMsg !== '') ? (
      <div className="card-panel red lighten-3">
        <div className="center-align">
          <span className="white-text">
            {errorMsg}
          </span>
        </div>
      </div>
      ): (<span></span>)
    }
  </div>
)

export default ErrorMsg
