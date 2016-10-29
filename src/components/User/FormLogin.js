import React, { Component } from 'react'
import axios from 'axios'
import { render } from 'react-dom'
import { Link } from 'react-router'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Checkbox,
  Radio,
  Button,
  HelpBlock,
  Grid,
  Row,
  Col
} from 'react-bootstrap'


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default class FormLogin extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col sm={6} smOffset={3}>
            <h1>Login</h1>
            <form>
              <FieldGroup
                id="username-input"
                type="text"
                label="Username"
                placeholder="Enter username"
                onChange={this.props.onUsernameChange}
              />
              <FieldGroup
                id="password-input"
                label="Password"
                type="password"
                placeholder="Enter password"
                onChange={this.props.onPasswordChange}
              />

              <Button type="button" bsStyle="success" onClick={this.props.onLogin}>
                Submit
              </Button> or <Link to="/app/register"> register</Link>
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }
};
