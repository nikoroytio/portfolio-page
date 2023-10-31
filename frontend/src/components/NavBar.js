import React from 'react'
import { Container,} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Menu from '../assets/icons/menu'
import './NavBar.css'

function NavBar() {
  return (
    <Navbar sticky="top">
        <Container className='flex-row-reverse fade-in' >
            <Menu/>
        </Container>
    </Navbar>
  )
}

export default NavBar