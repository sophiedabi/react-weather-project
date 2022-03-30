import React, { Component } from "react";
import { Route } from "react-router-dom";
import Weather from "./Weather";

export default class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact={true}
          path="/"
          render={() => (
            <div className="App">
              <Weather city="braunschweig" />
            </div>
          )}
        />
        <Route
          exact={false}
          path="/hamburg"
          render={() => (
            <div className="App">
              <Weather city="hamburg" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/ratzeburg"
          render={() => (
            <div className="App">
              <Weather city="Ratzeburg" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/salzgitter"
          render={() => (
            <div className="App">
              <Weather city="Salzgitter" />
            </div>
          )}
        />
      </div>
    );
  }
}
