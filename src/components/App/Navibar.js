import React, { Component } from 'react'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
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
        <IndexLinkContainer to='/app'>
        <Navbar.Header>
          <Navbar.Brand>
            The Shoebox
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        </IndexLinkContainer>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/app/product">
              <NavItem eventKey={1}>Product</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1}>
              <Form inline>
                <FormGroup>
                  <InputGroup>
                    <FormControl type="text" />
                  </InputGroup>
                </FormGroup>
              </Form>
            </NavItem>
            <LinkContainer to="/app/cart">
              <NavItem eventKey={2} href="/app/cart">Cart</NavItem>
            </LinkContainer>
            <LinkContainer to="/app/login">
              <NavItem eventKey={3} href="/app/login">Guest</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}