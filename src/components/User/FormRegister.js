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

export default class FormRegister extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col sm={6} smOffset={3}>
            <h1>Register</h1>
            <form>
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Username"
                placeholder="Enter username"
              />
              <FieldGroup
                id="formControlsPassword"
                label="Enter password"
                type="password"
                placeholder="Enter password"
              />
              <FieldGroup
                id="formControlsPassword"
                label="Re-password"
                type="password"
                placeholder="Enter re-password"
              />
              <FieldGroup
                id="formControlsEmail"
                type="email"
                label="Email address"
                placeholder="Enter email"
              />
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Firstname"
                placeholder="Enter firstname"
              />
              <FormGroup>
                <ControlLabel>Gender</ControlLabel>
                <Radio>
                  Male
                </Radio>
                {' '}
                <Radio>
                  Female
                </Radio>
              </FormGroup>
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Lastname"
                placeholder="Enter lastname"
              />
              //birthday
              <FieldGroup
                id="formControlsText"
                type="text"
                label="City"
                placeholder="Enter city"
              />
              <FieldGroup
                id="formControlsText"
                type="text"
                label="District"
                placeholder="Enter district"
              />
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Street"
                placeholder="Enter street"
              />
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Phone"
                placeholder="Enter phone number"
              />
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Firstname"
                placeholder="Enter firstname"
              />

              <Button type="submit" bsStyle="success">
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }
};
