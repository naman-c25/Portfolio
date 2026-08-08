import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple">Full Stack Developer</b> currently
              pursuing my B.Tech in Computer Science at{" "}
              <b className="purple">Ajay Kumar Garg Engineering College</b>,
              who enjoys shipping systems end-to-end — from database schema to
              pixel.
              <br />
              <br />
              My core languages are{" "}
              <i>
                <b className="purple">Java, JavaScript (ES6+), and TypeScript</b>
              </i>
              , and I build interfaces with{" "}
              <i>
                <b className="purple">React.js, Next.js, Redux Toolkit, and Tailwind CSS.</b>
              </i>
              <br />
              <br />
              On the backend I work with{" "}
              <i>
                <b className="purple">Node.js, Express.js, and RESTful APIs</b>
              </i>{" "}
              backed by <b className="purple">MySQL, MongoDB, and PostgreSQL</b>,
              with Redis for caching and OTP flows.
              <br />
              <br />
              I've shipped role-based access systems, payment integrations, and
              containerized services with{" "}
              <b className="purple">Docker, Kubernetes, and AWS</b>.
              <br />
              <br />
              Guardian rank on LeetCode, 2★ on CodeChef, and 400+ DSA problems
              solved across LeetCode, GeeksforGeeks, and CodeChef.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Naman Kumar Chaudhary"
                style={{ borderRadius: "50%", maxWidth: "300px" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/naman-c25"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/naman-c25"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/naman-c25"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LeetCode"
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.codechef.com/users/namanchaudh251"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="CodeChef"
                >
                  <SiCodechef />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://codolio.com/profile/naman2510"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Codolio"
                >
                  <AiOutlineLink />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
