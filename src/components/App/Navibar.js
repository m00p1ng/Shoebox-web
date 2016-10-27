import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown,
  Form,
  FormGroup,
  FormControl,
  InputGroup
} from 'react-bootstrap'

export default class Navibar extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/app">Shoe box</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/app/product">Product</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Form inline>
                <FormGroup>
                  <InputGroup>
                    <FormControl type="text" />
                  </InputGroup>
                </FormGroup>
              </Form>
            </NavItem>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="/app/login">Guest</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
