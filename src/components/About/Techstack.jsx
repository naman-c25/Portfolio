import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJava,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiRedis,
  SiSocketdotio,
} from "react-icons/si";

const stack = [
  { icon: <DiJava />, name: "Java" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <DiReact />, name: "React.js" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiRedux />, name: "Redux Toolkit" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiSocketdotio />, name: "Socket.io" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiRedis />, name: "Redis" },
  { icon: <DiGit />, name: "Git" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {stack.map((tech) => (
        <Col xs={4} md={2} className="tech-icons" key={tech.name} title={tech.name}>
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
