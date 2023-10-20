import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutImage from "../assets/image/niko-roytio.webp";
import Skills from "./Skills"
import "./About.css";


function About() {

  const [visible, setVisible] = useState(false);

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
                <p>etsis ipsum id feassa leo condimentum nibh, sed aliquam metus enim eu dui.etsis ipsum id feassa leo condimentum nibh, sed aliquam metus enim eu dui
                etsis ipsum id feassa leo condimentum nibh, sed aliquam metus enim eu duietsis ipsum id feassa leo condimentum nibh, sed aliquam metus enim eu dui
                etsis ipsum id feassa leo condimentum nibh, sed aliquam metus enim eu duietsis ipsum id feassa leo condimentum nibh, sed aliquam metus enim eu dui
                etsis ipsum id feassa leo condimentum nibh, sed aliquam metus enim eu duietsis ipsum id feassa leo condimentum nibh, sed aliquam metus enim eu dui
                </p>
              <Skills/>
               
            </Col>

        </Row>
    </Container>

  )
}

export default About