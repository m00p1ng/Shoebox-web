import React, { Component } from 'react'
import { render } from 'react-dom'

import Navibar from '../App/Navibar'
import Home from './Home'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navibar />
        <Home />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
