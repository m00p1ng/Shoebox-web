import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import { ControlledCarousel } from './Carousel'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Grid>
          <h1>Home page</h1>
          <input class="btn btn-default" type="button" value="Input"/>
          <ControlledCarousel />
        </Grid>
      </div>
    )
  }
}
