import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Calculator from "../components/Calculator"
import "./Projects.css"

function Projects() {
  return (
    <Container fluid className='projectContainer'>
      <Row>
        <Col>
        <h2>My projects</h2>
        </Col>
      </Row>
        <Row className='projectRow'>
            <Col>
                <h4>Calculator</h4>
                <Calculator />
            </Col>
            <Col>

            </Col>
            <Col>

            </Col>
        </Row>
    </Container>
  )
}

export default Projects