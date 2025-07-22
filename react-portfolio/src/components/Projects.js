import React from 'react';

export default function Projects() {
  return (
    <section className="py-5 bg-light text-dark" id="projects">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Projects</h2>

        <div className="row g-4">

          {/* Cartnr Project */}
          <div className="col-md-6">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title fw-bold">Cartnr</h5>
                <p className="card-text">
                  A solo-built geosocial networking app that helps golfers find compatible playing partners
                  based on skill level, location, and preferences.
                </p>
                <p className="mb-1">
                  <strong>Tech:</strong> Java, Spring Boot, HTML, CSS, Agile
                </p>
              </div>
              <div className="card-footer bg-white border-0">
                <a
                  href="https://github.com/christhomas1190/NewPassionProject"
                  target="_blank"
                  rel=""
                  className="btn btn-outline-primary btn-sm"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* CrossKey Communications */}
          <div className="col-md-6">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title fw-bold">CrossKey Communications</h5>
                <p className="card-text">
                  A team-built news aggregation platform with real-time updates and clean UI integration.
                  Focused on backend safety, scalability, and frontend responsiveness.
                </p>
                <p className="mb-1">
                  <strong>Tech:</strong> Java, Spring Boot, MySQL, React, CSS
                </p>
              </div>
              <div className="card-footer bg-white border-0">
                <a
                  href="https://github.com/Cross-Key-Communications/BrandonGrahamDay/tree/Christian-safety-net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
