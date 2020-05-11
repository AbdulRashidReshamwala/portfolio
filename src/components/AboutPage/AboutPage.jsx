import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import codeString from "./codeString";

function AboutPage({ history }) {
  const lineNum = [12, 13, 14];
  const action = {
    13: () => {
      history.push({ pathname: "projects" });
    },
    12: () => {
      history.push({ pathname: "skills" });
    },
    14: () => {
      history.push({ pathname: "contact" });
    },
  };
  return (
    <Row style={{ paddingTop: "2rem" }}>
      <Col sm={12} lg={6}>
        <h2 style={{ color: "white" }}>About Me</h2>
        <SyntaxHighlighter
          showLineNumbers
          language="javascript"
          style={atomDark}
          lineProps={(lineNumber) => ({
            style: {
              cursor: lineNum.includes(lineNumber) ? "pointer" : "copy",
            },
            onClick() {
              lineNum.includes(lineNumber)
                ? action[lineNumber]()
                : console.log(null);
            },
          })}
        >
          {codeString}
        </SyntaxHighlighter>
      </Col>
    </Row>
  );
}

export default withRouter(AboutPage);
