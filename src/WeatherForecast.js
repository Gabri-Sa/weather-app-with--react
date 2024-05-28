import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Wed</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures"></div>
          <span className="WeatherForecast-temperature-max"> 25</span>
          <span className="WeatherForecast-temperature-min"> 21 </span>
        </div>
      </div>
    </div>
  );
}
