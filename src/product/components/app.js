import React, { Component } from 'react'
import { render } from 'react-dom'

import Navibar from 'Navibar'
import ProductList from 'ProductList'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navibar />
        <ProductList />
      </div>
    )
  }
}
