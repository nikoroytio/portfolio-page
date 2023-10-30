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
            <Col>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="validationCustom01">
                            <FloatingLabel  label="Email">

                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Email"
                                    />
                            </FloatingLabel>
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="validationCustom02">
                        <FloatingLabel  label="Name">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Name"
                                />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="validationCustom03">
                        <FloatingLabel  label="Subject">

                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Subject"
                                />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="validationCustom04">
                        <FloatingLabel  label="Message">

                                <Form.Control
                                    required
                                    type="textare"
                                    placeholder="Message"
                                    style={{ height: '100px' }}
                                />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                            />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  );
}

export default ContactForm