import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TodoApp } from "../components/08-TodoApp/TodoApp";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "../components/NavBar/navBar";

export const RouterApp = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/todo" component={TodoApp} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/home" component={HomeScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route path="/" component={LoginScreen} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
