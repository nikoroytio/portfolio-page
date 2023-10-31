import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import ContactForm from '../components/ContactForm';
import ContactImage from '../assets/image/niko-roytio-contact.webp'
import "./ContactUs.css"

function ContactUs() {
  const [ref, inView] = useInView({
    threshold: 0.1,  // The percentage of the target element which is visible to trigger 'inView'
    triggerOnce: true  // Ensures the animation only occurs once
  });

  return (
    <Container fluid className={`p-16 contactUs ${inView ? 'slideFadeInEffect' : ''}`}
    ref={ref}>
        <Row className='justify-content-center'>
            <Col md={4}>
             <img src={ContactImage} alt="picture of niko röytiö" className='img-fluid'></img>
            </Col>
            <Col md={4}>
                <ContactForm/>
            </Col>
        </Row>
    </Container>
  )
}

export default ContactUs