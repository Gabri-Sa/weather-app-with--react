import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Oxford" />

        <footer>
          This project was coded by
          <a
            href="https://portfolio-gabriela-saftoiu.netlify.app/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <em>Gabriela Saftoiu</em>
          </a>
          , is open-sourced on
          <a
            href="https://github.com/Gabri-Sa/weather-app-with--react"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub
          </a>{" "}
          and hosted on
          <a
            href="https://weather-app-built-with-react.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
