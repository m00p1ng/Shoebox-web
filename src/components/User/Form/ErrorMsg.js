import React, { PropTypes } from 'react'

const ErrorMsg = ({errorMsg}) => (
  <div className="row">
    {
      (errorMsg !== '') ? (
      <div className="card-panel red lighten-3">
        <span className="white-text">
          {errorMsg}
        </span>
      </div>
      ): (<span></span>)
    }
  </div>
)

export default ErrorMsg
