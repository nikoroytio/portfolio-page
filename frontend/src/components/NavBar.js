import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Menu from '../assets/icons/menu';
import './NavBar.css';

function NavBar() {
  // variables for hiding and displaying offcanvas menu. More documentation on https://react-bootstrap.netlify.app/docs/components/offcanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar className="fixed-top">
        <Container className='flex-row-reverse fade-in'>
          <Menu onClick={handleShow} />
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>MENU</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav.Link href="#hero" onClick={handleClose}>HOME</Nav.Link>
        <Nav.Link href="#about-me" onClick={handleClose}>ABOUT ME</Nav.Link>
        <Nav.Link href="#projects" onClick={handleClose}>PROJECTS</Nav.Link>
        <Nav.Link href="#testimonials" onClick={handleClose}>TESTIMONIALS</Nav.Link>
        <Nav.Link href="#contact" onClick={handleClose}>CONTACT ME</Nav.Link>

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default NavBar;