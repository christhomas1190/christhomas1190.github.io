import React from 'react';

export default function About() {
  return (
    <section className="py-5 bg-light text-dark" id="about">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">About Me</h2>
        <p className="lead">
          I'm <strong>Christian Thomas</strong>, a dedicated educator turned full-stack developer.
          For nine years, I taught at Lindenwold Middle School and led student-athletes as head coach in soccer,
          wrestling, and track. While I’ve always enjoyed mentoring and strategizing for growth,
          my passion for problem-solving led me to pivot toward tech.
        </p>
        <p>
          Since 2022, I’ve immersed myself in software development, completing an intensive full-stack
          program through Zip Code Wilmington and diving deep into technologies like Java, Spring Boot,
          MySQL, and React. I’ve worked on real-world projects, from a news aggregation platform to
          a networking app for golfers.
        </p>
        <p>
          Outside of tech, I’m always learning — currently leveling up my Spanish skills and maintaining
          a <strong>1380-day streak</strong> on Duolingo.
        </p>
      </div>
    </section>
  );
}
