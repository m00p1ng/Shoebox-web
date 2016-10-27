import React, { Component } from 'react'
import Navibar from './Navibar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navibar />
        <div className='container'>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
