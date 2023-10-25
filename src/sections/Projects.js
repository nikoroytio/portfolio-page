import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Calculator from "../components/Calculator.js"
import EtchASketch from "../components/EtchASketch.js"
import RockPaperScissors from "../components/RockPaperScissors.js"
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
            <Col className='etchASketch'>
              <h4>Etch-A-Sketch</h4>
              <EtchASketch/>
            </Col>
            <Col>
              <h4>Rock Paper Scissors</h4>
              <RockPaperScissors/>
            </Col>
        </Row>
    </Container>
  )
}

export default Projects