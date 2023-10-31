import React from 'react'
import { Container,} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Menu from '../assets/icons/menu'

function NavBar() {
  return (
    <Navbar sticky="top">
        <Container className='flex-row-reverse' >
            <Menu/>
        </Container>
    </Navbar >
  )
}

export default NavBar