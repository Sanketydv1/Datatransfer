import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-5 w-100">
      <Container fluid>
        <Row className="justify-content-center">
          <Col className="text-center">
            <p className="mb-0">&copy; 2024 Inventory Management System</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
