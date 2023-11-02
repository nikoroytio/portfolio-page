import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import SocialMediaBanner from '../components/SocialMediaBanner';
import './Footer.css'

function Footer() {
  return (
    <Container fluid className='footerContainer'>
        <Row className='footerRow'>
            <Col>
            <p>&copy; Niko Röytiö 2023</p>
            </Col>
            <Col>
              <SocialMediaBanner/>
            </Col>
            <Col>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer