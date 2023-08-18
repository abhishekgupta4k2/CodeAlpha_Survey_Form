import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => {
  return (
    <div>
       <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#Home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/signin">Signin</Nav.Link>
            <Nav.Link href="/">Signup</Nav.Link>
            <Nav.Link href="/survey/details">Your Survey</Nav.Link>
            <Nav.Link href="/signout">Sign Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavbar;
