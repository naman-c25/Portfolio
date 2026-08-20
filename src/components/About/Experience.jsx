import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Reveal from "../Reveal";

const experiences = [
  {
    company: "Sirhaana",
    role: "Technical Intern",
    period: "Mar 2026 – Aug 2026",
    location: "Remote",
    points: [
      "Implemented permission-based access control across the admin panel's 76+ API endpoints and 8 user roles, with the UI reading the same rules the backend enforces.",
      "Moved AI prompt lookups onto a Redis cache-aside layer so reads no longer hit the prompts table — the cache warms on boot, back-fills from the DB on a miss, and re-syncs on every prompt create, update, or delete.",
      "Traced an intermittent image-generation bug to an API quota limit rather than a code defect, and fixed a staging outage by making the deploy self-healing instead of depending on manual scripts.",
    ],
  },
  {
    company: "The Spiritual Company",
    role: "Full Stack Developer Intern",
    period: "Jan 2026 – Mar 2026",
    location: "Remote",
    points: [
      "Set up independent CI/CD pipelines for 3 microservices on Hostinger, clearing the CORS misconfiguration and Git deployment blocks that were preventing auto-deploy on push.",
      "Configured Redis caching and rewrote slow database queries, cutting API response times and easing read load on the database.",
      "Wrote a domain-grounded chat assistant with custom prompting and multi-turn context handling, and rate-limited the paid endpoint to keep costs bounded.",
    ],
  },
];

function Experience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {experiences.map((exp) => (
        <Col md={10} key={exp.company} style={{ paddingBottom: "20px" }}>
          <Reveal>
            <Card className="quote-card-view">
              <Card.Body style={{ textAlign: "left" }}>
                <h4>
                  <span className="purple">{exp.role}</span> · {exp.company}
                </h4>
                <p style={{ marginBottom: "10px", opacity: 0.8 }}>
                  {exp.period} · {exp.location}
                </p>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i} style={{ paddingBottom: "5px" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Reveal>
        </Col>
      ))}
    </Row>
  );
}

export default Experience;
