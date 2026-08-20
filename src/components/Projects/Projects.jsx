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
    tagline: "Student career development platform with AI-powered resume scoring.",
    points: [
      "Shipped a MERN job platform with separate student and recruiter roles across 22 REST endpoints, deployed on AWS EC2.",
      "Scored resumes against job descriptions using GPT-4o-mini — the PDF is parsed once at upload and cached, so each check costs one API call and returns a match score, keyword coverage, missing skills, and suggested fixes.",
      "Kept resumes off the app server by streaming uploads to S3 and serving them back through presigned URLs that expire in minutes; Razorpay payments unlock premium only after the HMAC signature verifies server-side.",
    ],
    tech: ["React", "Node.js", "MongoDB", "AWS EC2", "AWS S3", "Razorpay"],
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
    tagline: "Peer-to-peer video conferencing app with native WebRTC, no media server.",
    points: [
      "Built a video conferencing app with React and native WebRTC — no SDK and no media server: peers connect directly, and Socket.io only relays the offer/answer/ICE handshake.",
      "Went with a full-mesh topology so each participant streams straight to every other one; latency stays low and server cost stays at zero, though bandwidth grows with room size.",
      "Added screen sharing that falls back to the camera when sharing stops, in-room chat with timestamped history, and auto-generated meeting IDs that are easy to read aloud.",
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
    tagline: "LinkedIn-style social networking platform with server-side PDF resumes.",
    points: [
      "Developed a social networking platform with Next.js and Express, with 20 REST endpoints over five Mongoose models: users, profiles, posts, comments, and connections.",
      "Wired the social feed through Redux Toolkit so posts, likes, comments, and media uploads all update through three reducers, keeping feed state consistent no matter which page triggers the change.",
      "Generated resumes server-side with PDFKit, composing profile, work history, and education into a downloadable file on request.",
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
