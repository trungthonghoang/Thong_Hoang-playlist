import "./App.css";
import React from "react";
import Form from "./Components/Form";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/about">About</Link>
            </p>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
