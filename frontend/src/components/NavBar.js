import React from 'react'
import { Container,} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Menu from '../assets/icons/menu'

function NavBar() {
  return (
    <Navbar>
        <Container>
            <Menu/>
        </Container>
    </Navbar>
  )
}

export default NavBar