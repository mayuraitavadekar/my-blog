import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ReadComponent from "./ReadComponent";
import Projects from "./Projects";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/article/:number" exact component={ReadComponent} />
        <Route path="/projects" exact component={Projects} />
      </Switch>
    </Router>
  );
};

export default Routes;
