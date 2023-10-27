import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Testimonialsslider from "../components/Testimonialsslider"
import "./Testimonials.css"

function Testimonials() {
  return (
    <Container fluid>
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