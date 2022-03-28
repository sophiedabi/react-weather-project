import "./App.css";
import axios from "axios";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather city="Braunschweig" />
        <footer>
          {" "}
          This app was coded by Sophie Dabirmanesh, is open-sourced on{" "}
          <a
            href="https://github.com/sophiedabi/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://app.netlify.com/teams/sophiedabi/overview"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
