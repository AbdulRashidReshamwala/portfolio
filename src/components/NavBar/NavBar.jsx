import React from "react";
import { Navbar, Image, Row } from "react-bootstrap";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
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
        <a
          href="https://drive.google.com/file/d/1sBT1KCuKiJbOaYgko8EC3rvzp1E9ESKz/view"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button"
        >
          <Row margin={{}}>
            <Image
              fluid
              className="nav-img"
              src={`${window.location.origin}/resume.png`}
            ></Image>
            <h3>Resume</h3>
          </Row>
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
}
