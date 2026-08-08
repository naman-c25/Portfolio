import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { ImPointRight } from "react-icons/im";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {props.tagline && <p className="project-tagline">{props.tagline}</p>}
        {props.points ? (
          <ul className="project-points">
            {props.points.map((point, i) => (
              <li key={i}>
                <ImPointRight className="purple" /> {point}
              </li>
            ))}
          </ul>
        ) : (
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
        )}
        {props.tech && (
          <div className="project-tech-badges">
            {props.tech.map((t) => (
              <span key={t} className="project-tech-badge">
                {t}
              </span>
            ))}
          </div>
        )}
        <Button
          variant="primary"
          href={props.ghLink}
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
