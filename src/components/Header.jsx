import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <>
    <Navbar className="bg-success">
        <Container>
          <Navbar.Brand href="#home">
        <Link className='text-danger' to ={'/'} style={{textDecoration:'none',fontSize:'28px'}}>
              <i class="fa-solid fa-music"></i>
                Music Player
        </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header