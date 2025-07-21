import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="py-3">
      <Container>
        <Navbar.Brand href="#hero" className="fw-bold fs-4">
          Christian Thomas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar" />
        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#tech">Tech Stack</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="/v1/index.html" target="_blank" rel="noopener noreferrer">
              v1 Site
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
