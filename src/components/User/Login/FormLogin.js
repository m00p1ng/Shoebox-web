import React, { Component } from 'react'
import { render } from 'react-dom'
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
        <form>
          <FieldGroup
            id="formControlsEmail"
            type="text"
            label="Username"
            placeholder="Enter username"
          />
          <FieldGroup
            id="formControlsPassword"
            label="Password"
            type="password"
            placeholder="Enter password"
          />

          <Button type="submit">
            Submit
          </Button>
        </form>
      </Grid>
    )
  }
};
