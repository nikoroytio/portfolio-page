import React from 'react'
import { Container,} from 'react-bootstrap';
import NavBar from '../components/NavBar'
import './Header.css'

function Header() {
  return (
    <Container className='fade-in'>
      <NavBar/>
    </Container>
  )
}

export default Header