import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

function ContactInfo({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        {/* <ControlLabel>{label}</ControlLabel> */}
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }
  
  const formInstance = (
    <form>
      <FormGroup
        id="formControlsText"
        type="text"
        label="Text"
        placeholder="Enter text"
      />
      <FormGroup
        id="formControlsEmail"
        type="email"
        label="Email address"
        placeholder="Enter email"
      />
      <FormGroup id="formControlsPassword" label="Password" type="password" />
      <FormGroup
        id="formControlsFile"
        type="file"
        label="File"
        help="Example block-level help text here."
      />
  
      <FormGroup controlId="formControlsSelect">
        {/* <ControlLabel>Select</ControlLabel> */}
        <FormControl componentClass="select" placeholder="select">
          <option value="select">select</option>
          <option value="other">...</option>
        </FormControl>
      </FormGroup>
      <FormGroup controlId="formControlsSelectMultiple">
        {/* <ControlLabel>Multiple select</ControlLabel> */}
        <FormControl componentClass="select" multiple>
          <option value="select">select (multiple)</option>
          <option value="other">...</option>
        </FormControl>
      </FormGroup>
  
      <FormGroup controlId="formControlsTextarea">
        {/* <ControlLabel>Textarea</ControlLabel> */}
        <FormControl componentClass="textarea" placeholder="textarea" />
      </FormGroup>
  
      <FormGroup>
        {/* <ControlLabel>Static text</ControlLabel> */}
        <FormControl.Static>email@example.com</FormControl.Static>
      </FormGroup>
  
      <Button type="submit">Submit</Button>
    </form>
  );
  
  render(formInstance);

  export default ContactInfo;