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
              <Weather city="Braunschweig" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/hamburg"
          render={() => (
            <div className="App">
              <Weather city="Hamburg" />
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
