import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


export default function Contact() {
  return (
    <section className="py-5 bg-dark text-white" id="contact">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Get in Touch</h2>
        <p className="lead">
          Whether you want to collaborate, chat about tech, or just say hello —
          feel free to reach out!
        </p>

        <div className="mt-4 d-flex flex-column align-items-center gap-3">
          <a
             href="https://www.linkedin.com/in/christhomas1190"
             className="btn btn-outline-light d-flex align-items-center gap-2"
             target="_blank"
             rel="noopener noreferrer"
           >
             <FaLinkedin size={20} /> LinkedIn
           </a>

           <a
             href="https://github.com/christhomas1190"
             className="btn btn-outline-light d-flex align-items-center gap-2"
             target="_blank"
             rel="noopener noreferrer"
           >
             <FaGithub size={20} /> GitHub
           </a>

           <a
             href="mailto:ChristianThomas1190@gmail.com"
             className="btn btn-outline-light d-flex align-items-center gap-2"
           >
             <FaEnvelope size={20} /> Email
           </a>
        </div>
      </div>
    </section>
  );
}
