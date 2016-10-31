import React, { Component, PropTypes } from 'react'
import {
  Row,
  Col,
  Thumbnail,
  Button,
  Image,
  Panel
} from 'react-bootstrap'

export default class CartItem extends Component {
  render() {
    return (
      <div>
        <Panel>
          <Col sm={4}>
          <Image responsive src="http://weartesters.com/wp-content/uploads/2014/09/nike-air-force-1-duckboot-2.jpg" alt="242x200" />
          </Col>
          <Col lg={6} lgOffset={1}>
            <h2>Sneaker test 1</h2>
            <Button bsStyle="warning" disabled>Remove</Button>
          </Col>
        </Panel>
        <Button bsStyle="danger" disabled>Remove All</Button>{' '}
        <Button bsStyle="success" disabled>Check out</Button>
      </div>
    )
  }
}
