import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./ContactForm.css"

function ContactForm() {

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    // State hooks for form validation and submission status
    const [validated, setValidated] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission regardless of validation status

        const form = event.currentTarget;

        // Check form validation
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

            const API_URL = process.env.NODE_ENV === 'production' 
            ? 'https://roytioniko.com/api/'
            : 'http://localhost:3001/';

            try {
                // Send the form data to the server
                const response = await fetch(`${API_URL}send-email`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                 // Check if the request was successful
                if (response.ok) {
                    console.log('Email sent successfully.');
                    setSubmitted(true);
                } else {
                    console.log('Error sending email.');
                }
            } catch (error) {
                console.error('Failed to send email:', error);
            }
        }

        setValidated(true); // This will trigger validation feedback on the form
    };

    // The component's rendered JSX
    //More on Bootsraps form https://react-bootstrap.netlify.app/docs/forms/overview
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
                                            label={
                                                <span>
                                                    Agree to&nbsp;
                                                    <span
                                                        style={{ textDecoration: 'underline', cursor: 'pointer' }}
                                                        onClick={() => setShowOffcanvas(true)}
                                                    >
                                                        terms and conditions
                                                    </span>
                                                </span>
                                            }
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
            {/* I put offcanvas within the container because of correct structure, but feel free to modify it anyway you want */}
            {/* More documentation on https://react-bootstrap.netlify.app/docs/components/offcanvas */}
            <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="start" className="termsAndConditions">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Terms and Conditions</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Last updated: 02.11.2023<br/>
                    <br/>
                    <b>1. Introduction</b><br/>

                    By using the contact form on nikoroytio.com, you agree to the following terms and conditions. 
                    Please read them carefully. If you do not agree to these terms, please refrain from using the 
                    contact form.
                    <br/>
                    <b>2. Privacy</b><br/>

                    When you use our contact form, you provide us with certain personal information, specifically 
                    your email address. We promise to respect your privacy. We will not sell, distribute, or misuse 
                    your email address in any way. It will solely be used to respond to your inquiries or comments.
                    <br/>
                    <b>3. Data Protection</b><br/>

                    Your email address and any other information you provide through the contact form will be stored 
                    securely. We will take reasonable precautions to prevent the loss, misuse, or alteration of the 
                    information you provide.
                    <br/>
                    <b>4. Changes to These Terms</b><br/>

                    We may revise these terms and conditions from time to time. Any changes will be immediately 
                    posted on this page. By continuing to use the contact form after changes to these terms are 
                    made, you agree to be bound by the revised terms.
                    <br/>
                    <b>5. Contact</b><br/>

                    For any questions about these terms and conditions or any issues related to nikoroytio.com, 
                    please contact us at roytioniko@gmail.com or phone +358 40 546 8496.


                </Offcanvas.Body>
            </Offcanvas>
        </Container>
    );
}

export default ContactForm