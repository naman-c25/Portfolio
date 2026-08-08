import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineMail, AiFillGithub, AiOutlineSend } from "react-icons/ai";
import { FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/namanchaudhary2510@gmail.com";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.name}`,
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Get In <strong className="purple">Touch</strong>
        </h1>
        <p style={{ color: "white" }}>
          Have a role, a project, or just want to say hi? My inbox is open.
        </p>

        <Row style={{ justifyContent: "center", paddingTop: "30px" }}>
          <Col md={5} className="contact-info">
            <div className="contact-info-card">
              <h4>
                Let's build something <span className="purple">together</span>
              </h4>
              <p className="contact-info-text">
                I usually reply within a day. Prefer email or LinkedIn? That
                works too.
              </p>
              <p className="contact-info-line">
                <AiOutlineMail className="purple" />{" "}
                <a href="mailto:namanchaudhary2510@gmail.com">
                  namanchaudhary2510@gmail.com
                </a>
              </p>
              <p className="contact-info-line">
                <FaMapMarkerAlt className="purple" /> New Delhi, India
              </p>
              <p className="contact-info-line">
                <AiFillGithub className="purple" />{" "}
                <a
                  href="https://github.com/naman-c25"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/naman-c25
                </a>
              </p>
              <p className="contact-info-line">
                <FaLinkedinIn className="purple" />{" "}
                <a
                  href="https://www.linkedin.com/in/naman-c25"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/naman-c25
                </a>
              </p>
            </div>
          </Col>

          <Col md={6}>
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="What would you like to talk about?"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
                type="submit"
                className="hero-btn hero-btn-primary contact-submit"
                disabled={status === "sending"}
              >
                <AiOutlineSend style={{ marginBottom: "2px" }} />{" "}
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>

              {status === "sent" && (
                <p className="contact-status contact-status-ok">
                  ✅ Message sent! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="contact-status contact-status-err">
                  ⚠️ Something went wrong. Please email me directly at{" "}
                  <a href="mailto:namanchaudhary2510@gmail.com">
                    namanchaudhary2510@gmail.com
                  </a>
                </p>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
