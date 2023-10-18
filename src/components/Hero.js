import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundVideo from "./BackgroundVideo"
import LinkedIn from "../assets/icons/linkedin.png"
import Instagram from "../assets/icons/instagram.png"
import GitHub from "../assets/icons/github.png"
import scrollDownPng from '../assets/image/scrollDown.png';
import './Hero.css';

function Hero() {
  return (
    <Container className="p-0 hero-container">
      <BackgroundVideo />
      <div className="overlay-content">
        <Row>
          <Col md={6}>
            <div className='social-media-icons'>
            <a href="https://github.com/nikoroytio" target="_blank" rel="noopener noreferrer">
              <img src={GitHub} alt="Github - logo" />
            </a>
            <a href="https://www.instagram.com/rodelanka" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram - logo" />
            </a>
            <a href="https://www.linkedin.com/in/nikoroytio/" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="LInkedIn - logo" />
            </a>
            </div>
            <h1 className='typewriter-h1'>HEI, OLEN NIKO RÖYTIÖ</h1>
            
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className='typewriter-h2'>TULEVA KOODARINNE</h2>
            <button type='button' className='scrollDown'>
            <img src={scrollDownPng} alt="Scroll Down" />
            </button>
          </Col>
        </Row>
        
          
    </div>  
    </Container>
  );
}

export default Hero;