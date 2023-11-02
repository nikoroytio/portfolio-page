import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutImage from "../assets/image/niko-roytio.webp";
import AboutButtonSection from "../components/AboutButtonSection"
import "./About.css";


function About() {
  // State to manage the visibility of the component for fade-in effect
  const [visible, setVisible] = useState(false);

  // On component mount, set visible to true
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    // Container with dynamic classes for fade-in effect
    <Container fluid className={`p-16 about-container fade-in ${visible ? 'visible' : ''}`}>
        <Row className="about-me" id="about-me">

            <Col xxl={3} className='imgColumn'>
                <img src={AboutImage}  className="AboutImage img-fluid" alt="picture of Niko Roytio" />
            </Col>
            <Col xxl={5}>
                <h2>About me</h2>
                <p id="aboutparagraph">"I am Niko,an enthusiastic IT-engineering student at the University of Applied 
                Sciences with a keen interest in web development and coding, which I've pursued passionately as a 
                hobby for the past 5 years. My diverse professional background spans from video production to training
                and consulting in marketing.My family consist of partner, daughter and lovely dog Malla. Free time I spend with Dungeons and Dragons, playing guitar and spending
                time with my daughter.

                Working with micro enterprises I have always wanted to equip them with the best information, but at 
                the same time I wanted my training to be very easily approachable, ensuring everyone feels comfortable
                asking questions and contributing ideas, fostering a relaxed and engaging training environment. 
                So I´m not afraid to work with customers.

                Whether brainstorming innovative strategies or delivering reliable foundational solutions, customer 
                satisfaction has been at the forefront. I take immense pride in the consistent positive feedback, 
                with clients commending our proactive approach, reliability, and unwavering dedication to excellence.
                </p>
              <AboutButtonSection/>
               
            </Col>

        </Row>
    </Container>

  )
}

export default About