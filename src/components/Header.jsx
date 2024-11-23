import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand className='header' href="#home">Welcome to Main Inventory</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
