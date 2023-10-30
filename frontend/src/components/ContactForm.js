import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, FloatingLabel} from 'react-bootstrap';
import "./ContactForm.css"

function ContactForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  return (
    <Container>
        <Row>
            <Col className='formArea'>
                <h2>Hire me!</h2>
                <p>I am available for internship or for hire. Connect with me via phone: +358 40 546 8496 or email: roytioniko@gmail.com</p>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <FloatingLabel controlId="emailInput" className="mb-3" label="Email*">

                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Email*"
                                    />
                            </FloatingLabel>

                        <FloatingLabel  controlId="nameInput" className="mb-3" label="Name*">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Name*"
                                />
                        </FloatingLabel>
                        <FloatingLabel controlId="subjectInput" className="mb-3" label="Subject*">

                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Subject*"
                                />
                        </FloatingLabel>
                        <FloatingLabel controlId="messageInput" className="mb-3" label="Message*">

                                <Form.Control
                                    required
                                    type="textarea"
                                    style={{ height: '100px' }}
                                    placeholder="Message*"
                                />
                        </FloatingLabel>

                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                            />
                    </Form.Group>
                    <Button type="submit" id="formSubmit">Submit</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  );
}

export default ContactForm