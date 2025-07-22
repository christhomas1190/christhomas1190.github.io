import React from 'react';

export default function TechStack() {
  return (
    <section className="py-5 bg-white text-dark" id="tech">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Tech Stack</h2>
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Frontend</h5>
            <p>JavaScript, TypeScript, HTML, CSS, React</p>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Backend</h5>
            <p>Java, Spring Boot, MySQL, SQL, MVC</p>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Tools</h5>
            <p>GitHub, IntelliJ, VS Code, Postman, Maven, Zsh</p>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Currently Learning</h5>
            <p>Spanish (Duolingo), AWS (Foundational Skills)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
