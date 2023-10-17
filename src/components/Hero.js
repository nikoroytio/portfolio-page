import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundVideo from "./BackgroundVideo"
import scrollDownPng from '../assets/image/scrollDown.png';
import './Hero.css';

function Hero() {
  return (
    <Container className="p-0 hero-container">
      <BackgroundVideo />
      <div className="overlay-content">
        <Row>
        <Col md={6}>
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