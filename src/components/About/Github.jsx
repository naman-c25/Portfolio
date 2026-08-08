import React from "react";
import * as GitHubCalendarModule from "react-github-calendar";
import { Row } from "react-bootstrap";

const GitHubCalendar =
  (GitHubCalendarModule.default && GitHubCalendarModule.default.default) ||
  GitHubCalendarModule.default ||
  GitHubCalendarModule;

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="naman-c25"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
