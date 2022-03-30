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
            <Link to="/hamburg">Hamburg</Link>
          </li>
          <li className="navigation-item">
            <Link to="/ratzeburg">Ratzeburg</Link>
          </li>
          <li className="navigation-item">
            <Link to="/salzgitter">Salzgitter</Link>
          </li>
        </ul>
      </header>
    );
  }
}
