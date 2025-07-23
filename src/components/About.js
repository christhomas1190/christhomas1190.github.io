import React, { useEffect, useState } from 'react';
import DuolingoStreak from './DuolingoStreak';
export default function About() {
  return (
    <section className="py-5 bg-light text-dark" id="about">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">About Me</h2>
        <p className="lead">
          I'm <strong>Christian Thomas</strong>, a dedicated educator turned full-stack developer.
          For seven years, I taught at Lindenwold Middle School and coached student-athletes in soccer,
          wrestling, and track. While I’ve always enjoyed mentoring and leading, my passion for problem-solving
          led me to pivot into software development.
        </p>
        <p>
          Since 2022, I’ve immersed myself in software development — completing a highly selective,
          <strong>12-week, 1,000+ hour full-time program</strong> at Zip Code Wilmington. The experience
          was hands-on and intense, covering Java, Spring Boot, MySQL, React, Agile methodologies,
          and real-world team collaboration. I’ve since built full-stack applications, including a
          news aggregation platform and a networking app for golfers.
        </p>

       <p>
         I’m also committed to lifelong learning; I’ve maintained a <strong><DuolingoStreak /></strong> day Duolingo streak.
       </p>
      </div>
    </section>
  );
}
