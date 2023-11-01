import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Linkedin from '../assets/icons/linkedin'; 
import Github from '../assets/icons/github';     
import Instagram from '../assets/icons/instagram';
import "./SocialMediaBanner.css";

function SocialMediaBanner() {
  return (
    <Container >
        <Row >
            <Col className="socialMediaIcons">
            <a href="https://github.com/nikoroytio" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href="https://www.instagram.com/rodelanka" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/in/nikoroytio/" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            </Col>
        </Row>
    </Container>
  );
}

export default SocialMediaBanner;