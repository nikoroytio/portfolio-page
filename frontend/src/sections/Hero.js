// The hero component. Displays the main introduction and social links of the website.
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundVideo from "../components/BackgroundVideo"
import LinkedIn from "../assets/icons/linkedin.png"
import Instagram from "../assets/icons/instagram.png"
import GitHub from "../assets/icons/github.png"
import scrollDownPng from '../assets/icons/scrollDown.png';
import './Hero.css';

function Hero({ onScrollDown }) {

  // Handler to smoothly scroll down to the 'about me' section  
  const handleScrollDown = () => {
    onScrollDown();
    setTimeout(() => {
      const aboutSection = document.getElementById('about-me');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50); // A small delay to ensure the About section is rendered
  };

  return (
    <Container fluid className="p-0 hero-container" id="hero">
      <BackgroundVideo />
      <div className="overlay-content">
        <Row>
          <Col>
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
            <h1 className='typewriter-h1'>HI! I'M NIKO RÖYTIÖ</h1>
            
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className='typewriter-h2'>YOUR FUTURE DEVELOPER</h2>
            <a href="#about-me" className='scrollDownButton' onClick={handleScrollDown}>
            <img src={scrollDownPng} alt="Scroll Down" />
            </a>
          </Col>
        </Row>
        
          
    </div>  
    </Container>
  );
}

export default Hero;