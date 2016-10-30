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
  InputGroup,
  Label,
  Button
} from 'react-bootstrap'

import { URL_ROOT } from 'endpoint'

export default class Navibar extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            The Shoebox
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={`${URL_ROOT}`}>
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to={`${URL_ROOT}/product`}>
              <NavItem eventKey={2}>Product</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to={`${URL_ROOT}/cart`}>
              <NavItem eventKey={2}>Cart<span>&nbsp;<Label bsStyle="danger">0</Label></span></NavItem>
            </LinkContainer>
            <LinkContainer to={`${URL_ROOT}/login`}>
              <NavItem eventKey={3}>Guest</NavItem>
            </LinkContainer>
          </Nav>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
