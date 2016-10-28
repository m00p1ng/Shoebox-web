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
<<<<<<< HEAD
            <NavItem eventKey={1} href="/app/product">Product</NavItem>
=======
            <LinkContainer to="/app/product">
              <NavItem eventKey={1}>Product</NavItem>
            </LinkContainer>
>>>>>>> 15af0d458029c84411ae3b0c4fad61c3eba78004
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
<<<<<<< HEAD
            <NavItem eventKey={2} href="/app/cart">Cart</NavItem>
            <NavItem eventKey={3} href="/app/login">Guest</NavItem>
=======
            <LinkContainer to="/app/cart">
              <NavItem eventKey={2} href="/app/cart">Cart</NavItem>
            </LinkContainer>
            <LinkContainer to="/app/login">
              <NavItem eventKey={3} href="/app/login">Guest</NavItem>
            </LinkContainer>
>>>>>>> 15af0d458029c84411ae3b0c4fad61c3eba78004
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
