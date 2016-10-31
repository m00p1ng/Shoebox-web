import React, { Component, PropTypes } from 'react'
import { Grid } from 'react-bootstrap'

export default class Cart extends Component {
  render() {
    return (
      <Grid>
        <h1>{this.props.title}</h1>
        <div>{this.props.children}</div>
      </Grid>
    )
  }
}
