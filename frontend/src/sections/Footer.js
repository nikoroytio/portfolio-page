import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import SocialMediaBanner from '../components/SocialMediaBanner';

function Footer() {
  return (
    <Container>
        <Row>
            <Col>
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