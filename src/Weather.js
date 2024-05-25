import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Oxford</h1>
      <ul>
        <li>Saturday 19:20</li>
        <li>Sunny</li>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
            />
            19°C
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
