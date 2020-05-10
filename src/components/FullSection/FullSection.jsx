import React from "react";
import { Container } from "react-bootstrap";

export default function FullSection(props) {
  return (
    <div className="full-section" style={{ backgroundColor: "#323232" }}>
      <Container>{props.children}</Container>
    </div>
  );
}
