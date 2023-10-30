import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import Testimonialsslider from "../components/Testimonialsslider"
import "./Testimonials.css"

function Testimonials() {

  const [ref, inView] = useInView({
    threshold: 0.1,  // The percentage of the target element which is visible to trigger 'inView'
    triggerOnce: true  // Ensures the animation only occurs once
  });

  return (
    <Container fluid className={`testimonialsContainer ${inView ? 'slideFadeInEffect' : ''}`}
    ref={ref}
    >
        <Row className='testimonialsTitle'>
            <Col className='testimonialsItems'>
                <h2>Working with me</h2>
            </Col>
        </Row>
        <Row>
          <Col>
            <Testimonialsslider />
          </Col>
        </Row>
    </Container>
  )
}

export default Testimonials