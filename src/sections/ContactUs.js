import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import "./ContactUs.css"

function ContactUs() {
  return (
    <Container fluid className='contactUs'>
        <Row>
            <Col>
            
            </Col>
            <Col>
                <ContactForm/>
            </Col>
        </Row>
    </Container>
  )
}

export default ContactUs