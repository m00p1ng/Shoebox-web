import React, { PropTypes } from 'react'

const ErrorMsg = ({errorMsg}) => (
  <div className="row">
    {
      (errorMsg !== '') ? (
        <div className="center-align">
          {errorMsg}
        </div>
      ): (<span></span>)
    }
  </div>
)

export default ErrorMsg
