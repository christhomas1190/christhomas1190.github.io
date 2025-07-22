import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function Hero() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="py-3 justify-content-center">
      <Container className="d-flex flex-column align-items-center">
        <Navbar.Brand href="#hero" className="fw-bold fs-4 text-center mb-2">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar" />
        <Navbar.Collapse id="portfolio-navbar" className="justify-content-center">
          <Nav className="text-center">
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


//import React from 'react';
//
//export default function Hero() {
//  return (
//    <section className="bg-dark text-white text-center py-5" id="hero">
//      <div className="container">
//        <h1 className="display-3 fw-bold">Christian Thomas</h1>
//        <p className="lead">Full-Stack Developer | Educator | Coach</p>
//        <a href="#about" className="btn btn-outline-light mt-3">
//          Learn More About Me
//        </a>
//      </div>
//    </section>
//  );
//}
