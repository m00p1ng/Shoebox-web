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
  Grid
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

          <Button type="submit" onClick={this.props.onLogin}>
            Submit
<<<<<<< HEAD:src/components/User/FormLogin.js
          </Button> or <a href="/app/register"> register</a>
=======
          </Button> or <Link to="/app/register"> register</Link>
>>>>>>> 15af0d458029c84411ae3b0c4fad61c3eba78004:src/components/User/FormLogin.js
        </form>
      </Grid>
    )
  }
};
