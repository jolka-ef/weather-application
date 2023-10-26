import React from "react";
import * as WeatherIcons from "../js/icons/WeatherIcons.js";

const weatherTypes = {
  "01d": "Sun",
  "01n": "Moon",
  "02d": "CloudyDay",
  "02n": "CloudyNight",
  "03d": "ScatteredClouds",
  "03n": "ScatteredClouds",
  "04d": "BrokenClouds",
  "04n": "BrokenClouds",
  "09d": "Showers",
  "09n": "Showers",
  "10d": "RainyDay",
  "10n": "RainyNight",
  "11d": "Thunderstorm",
  "11n": "Thunderstorm",
  "13d": "Snow",
  "13n": "Snow",
  "50d": "Fogg",
  "50n": "Fogg",
};

export const getWeatherIcon = (iconCode) => {
  const type = getWeatherType(iconCode);
  const Icon = WeatherIcons[type];
  return <Icon />;
};

const getWeatherType = (iconCode) => {
  return weatherTypes[iconCode];
};
