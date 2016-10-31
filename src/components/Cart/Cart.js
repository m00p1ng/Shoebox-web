import React, { Component, PropTypes } from 'react'

export default class Cart extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
