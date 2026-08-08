import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naman Kumar Chaudhary </span>
            from <span className="purple"> Gorakhpur, Uttar Pradesh</span>.
            <br />
            <br />
            I am pursuing my Bachelor of Technology in Computer Science and
            Engineering from{" "}
            <span className="purple">
              Ajay Kumar Garg Engineering College, Ghaziabad
            </span>{" "}
            (2023–2027).
            <br />
            <br />
            I've worked as a Technical Intern at{" "}
            <span className="purple">Sirhaana</span> and a Full Stack
            Developer Intern at{" "}
            <span className="purple">The Spiritual Company</span>, building
            RESTful APIs, role-based access systems, and production web apps.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Competitive Programming
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Side Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Tech Stacks
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Naman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
