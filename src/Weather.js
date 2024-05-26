import React from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const apiKey = "8f30788ac6ddad712a98d8eee3c150ca";
  let city = "Oxford";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Oxford</h1>
      <ul>
        <li>Saturday 19:20</li>
        <li>Sunny</li>
        <div className="row mt-3">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
            />

            <span className="temperature">19</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 2%</li>
              <li>Humidity: 46%</li>
              <li>Wind: 7 mph</li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}
