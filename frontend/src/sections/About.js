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
    <Container fluid className={`p-16 about-container fade-in ${visible ? 'visible' : ''}`}>
        <Row className="about-me" id="about-me">

            <Col md={3}>
                <img src={AboutImage}  className="AboutImage img-fluid" alt="picture of Niko Roytio" />
            </Col>
            <Col md={5}>
                <h2>About me</h2>
                <p id="aboutparagraph">etsis ipsum id feassa leo condimentum nibh, sed aliquam metus enim eu dui.etsis ipsum id feassa leo condimentum nibh, sed aliquam metus enim eu dui
                etsis ipsum id feassa leo condimentum nibh, sed aliquam metus enim eu duietsis ipsum id feassa leo condimentum nibh, sed aliquam metus enim eu dui
                etsis ipsum id feassa leo condimentum nibh, sed aliquam metus enim eu duietsis ipsum id feassa leo condimentum nibh, sed aliquam metus enim eu dui
                etsis ipsum id feassa leo condimentum nibh, sed aliquam metus enim eu duietsis ipsum id feassa leo condimentum nibh, sed aliquam metus enim eu dui
                </p>
              <AboutButtonSection/>
               
            </Col>

        </Row>
    </Container>

  )
}

export default About