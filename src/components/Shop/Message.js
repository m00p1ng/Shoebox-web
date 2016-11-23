import React from 'react'

export const Loading = () => (
  <div className="col l10 s12">
    <div className="container center">
      <h1 className="grey-text text-darken-2">Loading...</h1>
      <div className="progress cyan lighten-3">
        <div className="indeterminate cyan darken-1"></div>
      </div>
    </div>
  </div>
)

export const ErrorMsg = () => (
  <div className="col l10 s12">
    <div className="container center">
      <h1 className="grey-text text-darken-2">Can't Fetch data</h1>
    </div>
  </div>
)
