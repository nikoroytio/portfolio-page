import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CircularProgressBar from './CircularProgressBar';

function Skills() {
  return (
    <Container className='skillBars'>
      <Row>
        <Col>
          <CircularProgressBar value={75} />
          <p>CSS</p>
          <CircularProgressBar value={84} />
          <p>HTML</p>
        </Col>
        <Col>
          <CircularProgressBar value={74} />
          <p>JAVASCRIPT</p>
          <CircularProgressBar value={52} />
          <p>REACT</p>
        </Col>
        <Col>
          <CircularProgressBar value={100} />
          <p>VIDEO EDITING</p>
          <CircularProgressBar value={83} />
          <p>GRAPHIC DESIGN</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Skills