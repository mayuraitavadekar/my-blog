import React from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ReadComponent from "./ReadComponent";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/article/:number" exact component={ReadComponent} />
      </Switch>
    </Router>
  );
};

export default Routes;
