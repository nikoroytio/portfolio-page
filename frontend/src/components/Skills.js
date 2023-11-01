import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CircularProgressBar from './CircularProgressBar';
import './Skills.css'

function Skills() {
  return (
    <Container className='skillBars'>
              <Row>
                <Col>
                  <CircularProgressBar value={42}/>
                  <p>JAVASCRIPT</p>
                </Col>
                <Col>
                  <CircularProgressBar value={64}/>
                  <p>HTML</p>
                </Col>
                <Col>
                  <CircularProgressBar value={63}/>
                  <p>CSS</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CircularProgressBar value={30}/>
                  <p>PYTHON</p>
                </Col>
                <Col>
                  <CircularProgressBar value={100}/>
                  <p>VIDEO EDITING</p>
                </Col>
                <Col>
                  <CircularProgressBar value={83}/>
                  <p>GRAPHIC DESIGN</p>
                </Col>
              </Row>
          </Container>
  )
}

export default Skills