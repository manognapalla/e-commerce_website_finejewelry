import React, {Component} from "react";
import { useState } from 'react';
import { send } from 'emailjs-com';
import {Form, Button } from "react-bootstrap";

function FeedbackForm() {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_wy4kg3n',
          'template_nqj2u5m',
          toSend,
          'SUMB2H4LVi2vPvFwi'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert("feedback submitted!")
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
  return (
    <div>
        <div><p><h6></h6></p></div>
      <form onSubmit={onSubmit}></form>

<h1 style={{color:"white"}}>FEEDBACK FORM</h1>
<Form onSubmit={onSubmit}>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type='text'
    name='from_name'
    placeholder='Your Name'
    value={toSend.from_name}
    onChange={handleChange} />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type='text'
    name='reply_to'
    placeholder='Your Email'
    value={toSend.reply_to}
    onChange={handleChange} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Feedback</Form.Label>
    <Form.Control as='textarea' rows={3}
    name='message'
    placeholder='Your message'
    value={toSend.message}
    onChange={handleChange}  />
  </Form.Group>
  <Button className="bg-secondary" as="input" type="submit" value="Submit" />{' '}
</Form>
    </div>
  );
}

export default FeedbackForm;