import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function Hero() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="py-1 justify-content-center">
      <Container className="d-flex flex-column align-items-center">
        <Navbar.Brand href="#hero" className="fw-bold fs-4 text-center mb-2">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar" />
        <Navbar.Collapse id="portfolio-navbar" className="justify-content-center">
          <Nav className="text-center">
            <Nav.Link href="#tech">Tech Stack</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
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



