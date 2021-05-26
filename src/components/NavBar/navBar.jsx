import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.scss";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark pad">
      <NavLink className="navbar-brand" to="/">
        React Hooks
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/todo">
              To Do list
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/login">
              State - Effect
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              useRef
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              Reducer
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
