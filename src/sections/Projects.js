import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import Calculator from "../components/Calculator.js"
import EtchASketch from "../components/EtchASketch.js"
import RockPaperScissors from "../components/RockPaperScissors.js"
import "./Projects.css"



function Projects() {

  const [ref, inView] = useInView({
    threshold: 0.3,  // The percentage of the target element which is visible to trigger 'inView'
    triggerOnce: true  // Ensures the animation only occurs once
  });

  return (
    <Container fluid className="projectContainer">
      <Row>
        <Col>
        <h2>My projects</h2>
        </Col>
      </Row>
        <Row
        className={`projectRow ${inView ? 'slideFadeInEffect' : ''}`}
        ref={ref}
        >
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