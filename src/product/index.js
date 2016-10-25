import React, { Component } from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './components/app'

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app')
)


if (module.hot) {
  module.hot.accept('../common/containers/Root', () => {
    const NextRootApp = require('../common/containers/Root').default

    render(
      <AppContainer>
         <NextRootApp
           history={browserHistory}
           initialState={initialState} />
      </AppContainer>,
      rootEl
    )
  })
}
