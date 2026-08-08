import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/about.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Terminal from "./Terminal";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="waving hand">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Naman Kumar Chaudhary</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              <p className="hero-tagline">
                I build reliable full-stack web apps — from role-based auth
                systems to REST APIs backed by MySQL, MongoDB, and PostgreSQL.
              </p>

              <div className="hero-cta">
                <Link to="/project" className="btn hero-btn hero-btn-primary">
                  View My Work
                </Link>
                <Link to="/contact" className="btn hero-btn hero-btn-outline">
                  Let's Talk
                </Link>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="Illustration of a developer at work"
                className="img-fluid"
                style={{ maxHeight: "330px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Terminal />
    </section>
  );
}

export default Home;
