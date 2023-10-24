import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Calculator from "../components/Calculator"
import "./Projects.css"

function Projects() {
  return (
    <Container>
        <Row className='projectRow'>
            <Col>
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