import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import GithubStats from "./GithubStats";
import Particle from "../Particle";
import Reveal from "../Reveal";
import naulej from "../../Assets/Projects/naulej.svg";
import financeAdvisor from "../../Assets/Projects/finance-advisor.svg";

const projects = [
  {
    imgPath: naulej,
    title: "Naulej — MERN Job Platform",
    description:
      "Role-based MERN job platform with 20+ REST endpoints: JWT authentication, bcrypt password hashing, Google OAuth 2.0, and custom middleware for Student/Recruiter authorization. Includes an AI-powered resume ATS checker that caches extracted PDF text and uses a single GPT-4o-mini call per analysis to score resumes against job descriptions. AWS S3 presigned URLs for resume storage and Razorpay checkout with server-side HMAC-SHA256 signature verification.",
    ghLink: "https://github.com/naman-c25/Naulej",
  },
  {
    imgPath: financeAdvisor,
    title: "Finance Advisor & Expense Tracker",
    description:
      "React 19/TypeScript personal finance PWA with Firebase Realtime Database, using event-driven listeners to sync transactions, goals, and analytics in real time. A resilient Gemini-based financial advisor with a 4-endpoint fallback chain spanning API versions and models. Google OAuth, email/password auth, and password recovery via Firebase Auth with UID-scoped security rules; installable PWA with service-worker caching and INR/USD/EUR/GBP multi-currency support.",
    ghLink: "https://github.com/naman-c25/Finance-Advisor-and-Expense-Tracker",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <GithubStats />
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, i) => (
            <Col md={4} className="project-card" key={project.title}>
              <Reveal delay={(i % 3) * 120}>
                <ProjectCard isBlog={false} {...project} />
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
