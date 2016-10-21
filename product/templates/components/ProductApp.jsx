import React, { Component } from 'react'
import { render } from 'react-dom'

import Navibar from 'Navibar'
import ProductList from 'ProductList'

export default class ProductApp extends Component {
  render() {
    return (
      <div>
        <Navibar />
        <ProductList />
      </div>
    )
  }
}

render(<ProductApp />, document.getElementById('app'))
