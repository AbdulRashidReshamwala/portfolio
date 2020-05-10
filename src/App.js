import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
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
