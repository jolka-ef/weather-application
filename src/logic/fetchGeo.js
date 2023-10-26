import axios from "axios";
import { APIkey } from "../APIkey.js";

export const getGeolocation = (city) => {
  const cachedResponse = localStorage.getItem(city);
  return cachedResponse ? JSON.parse(cachedResponse) : fetchGeo(city);
};

const fetchGeo = async (city) => {
  const result = await axios(buildGeoQuery(city));

  if (result.data.length > 0) {
    const geoData = {
      country: result.data[0].country,
      lat: result.data[0].lat,
      lon: result.data[0].lon,
      name: result.data[0].name,
    };
    localStorage.setItem(city, JSON.stringify(geoData));

    return geoData;
  }
};

const buildGeoQuery = (cityName) => {
  return `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${APIkey}`;
};
