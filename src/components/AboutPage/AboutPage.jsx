import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

// console.log(me.firstName) > "Abdul Rashid";

// console.log(me.lastName) > "Reshamwala";

// console.log(me.hobbies) > ["Coding", "Dancing"];
function AboutPage({ history }) {
  const codeString = `\
const me = SoftwareEngineer()

console.log(me)
> {
    fisrtName: "Abdul Rashid",
    lastName: "Reashamwala",
    education: "Bachelors in Computer Science",
    hobbies:(3) ["coding", "running", "saving the world"],
    intro: \`I am a tireless seeker of knowledge,\n\t\t\toccassional purveyor of wisdom and also,\n\t\t\tcoincidentally, a Programmer.\`
    > viewSkills : f viewSkills(...)
    > viewProjects : f viewProjects(...)
    > contactMe : f contactMe(...)
};

`;

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
          wrapLines={true}
          lineProps={(lineNumber) => ({
            style: {
              display: "block",
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
