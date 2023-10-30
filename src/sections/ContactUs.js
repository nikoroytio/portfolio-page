import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import ContactImage from '../assets/image/niko-roytio-contact.webp'
import "./ContactUs.css"

function ContactUs() {
  return (
    <Container fluid className='p-16 contactUs'>
        <Row className='justify-content-center'>
            <Col md={4}>
             <img src={ContactImage} alt="picture of niko röytiö"></img>
            </Col>
            <Col md={4}>
                <ContactForm/>
            </Col>
        </Row>
    </Container>
  )
}

export default ContactUs