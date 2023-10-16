import React from 'react';
import { Container } from 'react-bootstrap';
import BackgroundVideo from './backgroundVideo';
import './Hero.css';  

function Hero() {
  return (
    <Container fluid className="p-0 hero-container">
      <BackgroundVideo />
      <div className="overlay-content">
        <h1>Your Name</h1>
        <p>Your Profession</p>
      </div>
    </Container>
  );
}

export default Hero;