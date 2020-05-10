import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Image, Row, Nav } from "react-bootstrap";
import "./navbar.css";

function App() {
  return (
    <Router>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="nav-main"
      >
        <Navbar.Brand>
          <Link className="nav-button" to="/">
            <Row>
              <Image
                fluid
                className="nav-img"
                src={`${window.location.origin}/home.png`}
              ></Image>
              <h3>Home</h3>
            </Row>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-around"
        >
          <Nav.Link>
            <Link className="nav-button" to="/projects">
              <Row>
                <Image
                  fluid
                  className="nav-img"
                  src={`${window.location.origin}/bulb.png`}
                ></Image>
                <h3>Projects</h3>
              </Row>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-button" to="/skills">
              <Row>
                <Image
                  fluid
                  className="nav-img"
                  src={`${window.location.origin}/react.png`}
                ></Image>
                <h3>Skills</h3>
              </Row>
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/projects">
          <h1>Project</h1>
        </Route>
        <Route path="/skills">
          <h1>skills</h1>
        </Route>
        <Route path="/">
          <h1>home</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
