import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col,
  Thumbnail,
  Button,
  Image,
  Panel
} from 'react-bootstrap'

export default class Cart extends Component {
  render() {
    return (
      <Grid>
        <h1>Cart Page</h1>
          <Panel>
            <Col sm={4}>
            <Image responsive src="http://weartesters.com/wp-content/uploads/2014/09/nike-air-force-1-duckboot-2.jpg" alt="242x200" />
            </Col>
            <Col lg={6} lgOffset={1}>
              <h2>Sneaker test 1</h2>
              <Button bsStyle="warning">Remove</Button>
            </Col>
          </Panel>
          <Button bsStyle="danger">Remove All</Button>
      </Grid>
    )
  }
}
