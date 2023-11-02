import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./ContactForm.css"

function ContactForm() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission regardless of validation status

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            // If form is valid, prepare and send data to server
            const formData = {
                name: form.nameInput.value,
                email: form.emailInput.value,
                subject: form.subjectInput.value,
                message: form.messageInput.value
            };

            try {
                const response = await fetch('http://localhost:3001/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    console.log('Email sent successfully.');
                    setSubmitted(true);
                    // TODO: Provide visual feedback to the user (e.g., a success message or modal)
                } else {
                    console.log('Error sending email.');
                    // TODO: Provide visual feedback to the user (e.g., an error message or modal)
                }
            } catch (error) {
                console.error('Failed to send email:', error);
                // TODO: Provide visual feedback to the user (e.g., an error message or modal)
            }
        }

        setValidated(true); // This will trigger validation feedback on the form
    };

    return (
        <Container>
            <Row>
                <Col className='formArea'>
                    {
                        submitted ? (
                            <div className='thankYouMessage'>
                                <h2>Thank you for reaching out!</h2>
                                <p>I will reach out to you in 1-3 business days</p>
                            </div>
                        ) : (
                            <>
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

                                    <FloatingLabel controlId="nameInput" className="mb-3" label="Name*">
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
                                            id="termsAndConditions" 
                                            name="termsAndConditions" 
                                            type="checkbox"
                                            label="Agree to terms and conditions"
                                            feedback="You must agree before submitting."
                                            feedbackType="invalid"
                                        />
                                    </Form.Group>
                                    <Button type="submit" id="formSubmit">Submit</Button>
                                </Form>
                            </>
                        )
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default ContactForm