// The hero component. Displays the main introduction and social links of the website.
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundVideo from "../components/BackgroundVideo"
import Linkedin from '../assets/icons/linkedin';
import Github from '../assets/icons/github';
import Instagram from '../assets/icons/instagram';
import ScrollDownSVG from '../assets/icons/scrolldown';
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
          <Col md="auto">
          <div className='social-media-icons'>
              <a href="https://github.com/nikoroytio" target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
              <a href="https://www.instagram.com/rodelanka" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
              <a href="https://www.linkedin.com/in/nikoroytio/" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
             </div>
          <h1 className='typewriter-h1'>HI! I'M NIKO RÖYTIÖ</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="auto">
            <h2 className='typewriter-h2'>YOUR FUTURE DEVELOPER</h2>
            <a href="#about-me" className='scrollDownButton' onClick={handleScrollDown}>
              <ScrollDownSVG/>
            </a>
          </Col>
        </Row>


      </div>
    </Container>
  );
}

export default Hero;