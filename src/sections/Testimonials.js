import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./Testimonials.css"

function Testimonials() {
  return (
    <Container fluid>
        <Row className='testimonialsContent'>
            <Col className='testimonialsItems'>
                <h2>Working with me</h2>
            </Col>
        </Row>
    </Container>
  )
}

export default Testimonials