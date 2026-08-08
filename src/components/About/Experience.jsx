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
      "Architected a group-based PBAC (Permission-Based Access Control) system with ALLOW/DENY override resolution, spanning 20+ granular permissions across 8 role groups.",
      "Designed and maintained RESTful APIs, TypeORM, and MySQL across 19 relational entities, implementing JWT auth and Redis-backed OTP verification for Admin and Vendor flows.",
      "Built and deployed containerized microservices using Docker and GitHub Actions CI/CD, integrating a Gemini image-generation pipeline with S3/R2 object storage and idempotent boot-time recovery.",
    ],
  },
  {
    company: "The Spiritual Company",
    role: "Full Stack Developer Intern",
    period: "Jan 2026 – Mar 2026",
    location: "Remote",
    points: [
      "Designed a session-cart reconciliation system to handle concurrent guest-to-authenticated-user transitions, preventing cart data loss during login flows before launch.",
      "Optimized MongoDB product and order queries using indexes and pagination, reducing unnecessary database reads and improving query efficiency for catalogue and transaction workflows.",
      "Implemented Redis cache-aside caching with TTL-based expiration for frequently accessed product/catalog data, reducing repeated MongoDB reads and improving response latency for read-heavy endpoints.",
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
