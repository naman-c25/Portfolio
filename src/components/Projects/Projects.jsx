import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import GithubStats from "./GithubStats";
import Particle from "../Particle";
import Reveal from "../Reveal";
import naulej from "../../Assets/Projects/naulej.svg";
import financeAdvisor from "../../Assets/Projects/finance-advisor.svg";
import flashdb from "../../Assets/Projects/flashdb.svg";
import meethub from "../../Assets/Projects/meethub.svg";
import venturestay from "../../Assets/Projects/venturestay.svg";
import careersphere from "../../Assets/Projects/careersphere.svg";

const projects = [
  {
    imgPath: naulej,
    title: "Naulej",
    tagline: "Role-based MERN job platform with AI-powered resume screening.",
    points: [
      "Developed a role-based MERN job platform with 20+ REST endpoints, implementing JWT authentication, bcrypt password hashing, Google OAuth 2.0, and custom middleware for Student/Recruiter authorization.",
      "Engineered an AI-powered resume ATS checker that caches extracted PDF text and uses a single GPT-4o-mini call per analysis to evaluate resumes against job descriptions, returning match scores, missing keywords, and improvement suggestions.",
      "Integrated AWS S3 for secure resume storage using short-lived presigned URLs and implemented Razorpay checkout with server-side HMAC-SHA256 signature verification.",
    ],
    tech: ["React", "Node.js", "MongoDB", "AWS S3", "Razorpay", "JWT"],
    ghLink: "https://github.com/naman-c25/Naulej",
    demoLink: "https://naulej.com/",
  },
  {
    imgPath: financeAdvisor,
    title: "Finance Advisor & Expense Tracker",
    tagline:
      "AI-powered personal finance PWA with real-time sync and multi-currency support.",
    points: [
      "Crafted a React 19/TypeScript personal finance PWA with Firebase Realtime Database, using event-driven listeners to synchronize transactions, goals, and financial analytics in real time.",
      "Devised a resilient Gemini-based financial advisor with a 4-endpoint fallback chain spanning API versions and models, automatically failing over when upstream endpoints return errors.",
      "Enforced UID-scoped Firebase security rules with Google OAuth/email authentication, shipped as an installable PWA with service-worker caching and multi-currency support.",
    ],
    tech: ["React 19", "TypeScript", "Firebase", "Gemini AI", "PWA"],
    ghLink: "https://github.com/naman-c25/Finance-Advisor-and-Expense-Tracker",
    demoLink: "https://fadext.netlify.app/",
  },
  {
    imgPath: flashdb,
    title: "FlashDB",
    tagline: "A Redis-compatible in-memory data store built from scratch in Java.",
    points: [
      "Built a Redis-compatible in-memory data store from scratch in Java with zero runtime dependencies, implementing the real RESP2 wire protocol so redis-cli and Jedis connect unmodified.",
      "Implemented all 5 core Redis data types with TTL-based lazy/active expiry, maxmemory eviction (LRU/random/volatile-TTL), pub/sub with per-connection outbound queues, and MULTI/EXEC transactions with WATCH-based optimistic locking.",
      "Added RDB snapshotting and AOF persistence with crash recovery, validated through 200 tests — including concurrent-write races and real Docker SIGKILL restarts proving zero data loss.",
    ],
    tech: ["Java", "RESP2", "Docker", "Virtual Threads"],
    ghLink: "https://github.com/naman-c25/FlashDB",
    demoLink:
      "https://raw.githubusercontent.com/naman-c25/FlashDB/main/docs/demo-main.gif",
  },
  {
    imgPath: meethub,
    title: "MeetHub",
    tagline: "Real-time video conferencing app (Zoom clone) with WebRTC and Socket.io.",
    points: [
      "Built a real-time video conferencing app (Zoom clone) using WebRTC (simple-peer) for peer-to-peer audio/video streams and Socket.io for signaling and room management.",
      "Implemented user authentication with bcrypt-hashed credentials and MongoDB/Mongoose, plus meeting history tracking and unique meeting-ID generation for instant calls.",
      "Designed a responsive React and Material UI frontend with Framer Motion and GSAP animations for a polished landing page, lobby, and in-call experience.",
    ],
    tech: ["React", "WebRTC", "Socket.io", "MongoDB"],
    ghLink: "https://github.com/naman-c25/MeetHub",
    demoLink: "https://meet-hub-2jcd.vercel.app/",
  },
  {
    imgPath: venturestay,
    title: "VentureStay",
    tagline: "Full-stack Airbnb-style house rental listing platform.",
    points: [
      "Built a full-stack house rental listing platform with Express, MongoDB/Mongoose, and server-rendered EJS views using ejs-mate layouts.",
      "Implemented Passport.js local authentication with session persistence via connect-mongo, and Joi schema validation across all listing and review routes.",
      "Integrated Cloudinary and Multer for listing image uploads, with full CRUD for listings/reviews, flash-message feedback, and owner-based authorization middleware.",
    ],
    tech: ["Express", "EJS", "MongoDB", "Cloudinary"],
    ghLink: "https://github.com/naman-c25/VentureStay",
    demoLink: "https://wanderlust-project-uukt.onrender.com/",
  },
  {
    imgPath: careersphere,
    title: "CareerSphere",
    tagline: "LinkedIn-style professional networking platform with PDF profile export.",
    points: [
      "Built a LinkedIn-style professional networking platform with a Next.js/React frontend and Express/MongoDB backend, featuring a posts feed, connections graph, and profile discovery.",
      "Managed global state with Redux Toolkit across auth, posts, and profile flows, with bcrypt-secured authentication and Multer-based media uploads.",
      "Engineered a PDF profile export feature using PDFKit and pdf-creator-node, letting users download their professional profile as a shareable PDF resume.",
    ],
    tech: ["Next.js", "Redux", "MongoDB", "PDFKit"],
    ghLink: "https://github.com/naman-c25/CareerSphere",
    demoLink: "https://career-sphere-five.vercel.app/",
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
