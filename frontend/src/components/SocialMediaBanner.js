import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import linkedin from '../assets/icons/linkedin';
import github from '../assets/icons/github';
import instagram from '../assets/icons/instagram';

function SocialMediaBanner() {
  return (
    <Container>
        <Row>
            <Col>
            <a href="https://github.com/nikoroytio" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="Github - logo" />
            </a>
            <a href="https://www.instagram.com/rodelanka" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram - logo" />
            </a>
            <a href="https://www.linkedin.com/in/nikoroytio/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn - logo" />
            </a>
            </Col>
        </Row>
    </Container>
  )
}

export default SocialMediaBanner