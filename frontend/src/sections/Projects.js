import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import Calculator from "../components/Calculator.js"
import EtchASketch from "../components/EtchASketch.js"
import RockPaperScissors from "../components/RockPaperScissors.js"
import "./Projects.css"


function Projects() {

  const [ref, inView] = useInView({
    threshold: 0.1,  // The percentage of the target element which is visible to trigger 'inView'
    triggerOnce: true  // Ensures the animation only occurs once
  });

  return (
    <Container fluid className={`projectContainer ${inView ? 'slideFadeInEffect' : ''}`}
      ref={ref}
      >
      <Row>
        <Col>
        <h2>My projects</h2>
        </Col>
      </Row>
        <Row
        className="projectRow" id="projects">
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
        <Row className={`projectInfo ${inView ? 'slideFadeInEffect' : ''}`}
        ref={ref}
        >
          <Col md={6}>
            <p>These are my example Javascript projects. I have originally made them with HTML, 
              CSS and Javascript and they can be found on my <a href="https://github.com/nikoroytio" target="_blank" rel="noreferrer">GitHub</a> . But for this page I converted 
              them to react-components, so I could display them interactively. Also this page is an project which I made with React and Node.js. Apart from these projects 
              I have made number of Wordpress sites (like <a href="https://www.beautyparlour.fi/" target="_blank" rel="noreferrer">this </a> 
              for example), and have made code snippets for different projects, like for raspberry pi built weather station
              and backend function for wix website to use custom emails as validation for new registrars.</p>
          </Col>
        </Row>
    </Container>
  )
}

export default Projects