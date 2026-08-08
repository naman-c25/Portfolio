import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiJest,
} from "react-icons/si";

const tools = [
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiJest />, name: "Jest" },
  { icon: <SiAmazonaws />, name: "AWS (EC2, S3)" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiKubernetes />, name: "Kubernetes" },
  { icon: <SiGithubactions />, name: "CI/CD" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => (
        <Col xs={4} md={2} className="tech-icons" key={tool.name} title={tool.name}>
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
