import React, { Component } from 'react'
import { render } from 'react-dom'

import Navibar from '../../App/Navibar'
import FormLogin from './FormLogin'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navibar />
        <FormLogin />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
