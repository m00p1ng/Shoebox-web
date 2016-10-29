import React, { Component } from 'react'
import Navibar from './Navibar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navibar />
        {this.props.children}
      </div>
    )
  }
}
