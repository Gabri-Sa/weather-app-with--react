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
          >
            {" "}
            <em>Gabriela Saftoiu</em>{" "}
          </a>{" "}
          and is open-sourced on
          <a
            href="https://github.com/Gabri-Sa/weather-app-with--react"
            target="_blank"
          >
            {" "}
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
