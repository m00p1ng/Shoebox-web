import React, { Component } from 'react'
import { render } from 'react-dom'
import { Button } from 'react-bootstrap';

import Navibar from 'Navibar'

export default class ProductApp extends Component {
  render() {
    return (
      <div>
        <Navibar />
        <h1>Product View eiei</h1>
        <Button>Default</Button>
      </div>
    )
  }
}

render(<ProductApp />, document.getElementById('app'))
