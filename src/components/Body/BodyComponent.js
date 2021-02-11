import React from "react";
import { Redirect, Route, Switch } from "react-router";
import ContactPageComponent from "./ContactPage/ContactPage";
import LandingPageComponent from "./LandingPage/LandingPage";
import Projects from "./ProjectsSection/Projects";

const BodyComponent = () => {
  return (
    <Switch>
      <Route path="/home" exact component={LandingPageComponent} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/feedback" exact component={ContactPageComponent} />
      <Redirect from="/" to="/home" />
    </Switch>
  );
};
export default BodyComponent;
