import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <header>
        <ul className="navigation-items">
          <li className="navigation-item">
            <Link to="/">Braunschweig</Link>
          </li>
          <li className="navigation-item">
            <Link to="/paris">Hamburg</Link>
          </li>
          <li className="navigation-item">
            <Link to="/sydney">Ratzeburg</Link>
          </li>
          <li className="navigation-item">
            <Link to="/san-francisco">Salzgitter</Link>
          </li>
        </ul>
      </header>
    );
  }
}
