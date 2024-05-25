import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          This project was coded by <em>Gabriela Saftoiu</em> and is
          open-sourced on
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
