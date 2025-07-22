import React from 'react';
import { FaAws } from 'react-icons/fa';

export default function TechStack() {
  return (
    <section className="py-5 bg-white text-dark" id="tech">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Tech Stack</h2>
        <div className="row text-center">

          {/* Frontend */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Frontend</h5>
            <div className="d-flex justify-content-center flex-wrap">
              <div className="tech-icon">
                <i className="devicon-html5-plain colored" style={{ fontSize: '2rem' }}></i>
                <div className="tooltip-text">HTML5</div>
              </div>
              <div className="tech-icon">
                <i className="devicon-css3-plain colored" style={{ fontSize: '2rem' }}></i>
                <div className="tooltip-text">CSS3</div>
              </div>
              <div className="tech-icon">
                <i className="devicon-javascript-plain colored" style={{ fontSize: '2rem' }}></i>
                <div className="tooltip-text">JavaScript</div>
              </div>
              <div className="tech-icon">
                <i className="devicon-typescript-plain colored" style={{ fontSize: '2rem' }}></i>
                <div className="tooltip-text">TypeScript</div>
              </div>
              <div className="tech-icon">
                <i className="devicon-react-original colored" style={{ fontSize: '2rem' }}></i>
                <div className="tooltip-text">React</div>
              </div>
            </div>
          </div>


          {/* Backend */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Backend</h5>
            <div className="d-flex justify-content-center flex-wrap">
              <div className="tech-icon">
                <i className="devicon-java-plain colored" style={{ fontSize: '2rem' }}></i>
                <div className="tooltip-text">Java</div>
              </div>
              <div className="tech-icon">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/spring-3.svg"
                  alt="Spring Boot"
                  width="30"
                  height="30"
                />
                <div className="tooltip-text">Spring Boot</div>
              </div>
              <div className="tech-icon">
                <i className="devicon-mysql-plain colored" style={{ fontSize: '2rem' }}></i>
                <div className="tooltip-text">MySQL</div>
              </div>
            </div>
          </div>


          {/* Tools */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Tools</h5>
            <div className="d-flex justify-content-center flex-wrap">
              <div className="tech-icon">
                <i className="devicon-github-original colored" style={{ fontSize: '2rem' }}></i>
                <div className="tooltip-text">GitHub</div>
              </div>
              <div className="tech-icon">
                <i className="devicon-intellij-plain colored" style={{ fontSize: '2rem' }}></i>
                <div className="tooltip-text">IntelliJ IDEA</div>
              </div>
              <div className="tech-icon">
                <i className="devicon-vscode-plain colored" style={{ fontSize: '2rem' }}></i>
                <div className="tooltip-text">Visual Studio Code</div>
              </div>
              <div className="tech-icon">
                <i className="devicon-postman-plain colored" style={{ fontSize: '2rem' }}></i>
                <div className="tooltip-text">Postman</div>
              </div>
              <div className="tech-icon">
                <i className="devicon-maven-plain colored" style={{ fontSize: '2rem' }}></i>
                <div className="tooltip-text">Maven</div>
              </div>
              <div className="tech-icon">
                <i className="devicon-zsh-plain colored" style={{ fontSize: '2rem' }}></i>
                <div className="tooltip-text">Zsh</div>
              </div>
            </div>
          </div>

          {/* Currently Learning */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Currently Learning</h5>
            <div className="d-flex justify-content-center flex-wrap">
              <div className="tech-icon">
                <span role="img" aria-label="Spanish" style={{ fontSize: '1.8rem' }}>🇪🇸</span>
                <div className="tooltip-text">Spanish (Duolingo)</div>
              </div>
              <div className="tech-icon">
                <FaAws size={32} color="#FF9900" />
                <div className="tooltip-text">Amazon Web Services (AWS)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
