import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import FullSection from "./components/FullSection/FullSection";
import AboutPage from "./components/AboutPage/AboutPage";

function App() {
  return (
    <Router>
      <NavBar />
      <FullSection>
        <Route path="/projects">
          <h1>Project</h1>
        </Route>
        <Route path="/skills">
          <h1>skills</h1>
        </Route>
        <Route exact path="/">
          <AboutPage />
        </Route>
      </FullSection>
    </Router>
  );
}

export default App;
