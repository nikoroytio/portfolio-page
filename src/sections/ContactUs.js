import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import "./ContactUs.css"

function ContactUs() {
  return (
    <Container>
        <Row>
            <Col>
                <ContactForm/>
            </Col>
        </Row>
    </Container>
  )
}

export default ContactUs