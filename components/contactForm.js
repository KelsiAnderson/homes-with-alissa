import React, { Component, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {

  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  function handleMessage(e) {
    const message = e.target.value;
    setMessage(message)
  }

  function handleEmail(e) {
    const email = e.target.value;
    setEmail(email)
  }

  return (
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={handleEmail}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>What brings you here?</Form.Label>
    <Form.Control as="textarea" rows={3} onChange={handleMessage}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  )
}

export default ContactForm
