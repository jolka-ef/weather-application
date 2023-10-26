import { useEffect, useState } from "react";
import axios from "axios";
import { APIkey } from "../APIkey.js";
import { getGeolocation } from "./fetchGeo.js";

export const useWeatherApi = (cityName) => {
  const [city, setCity] = useState(cityName);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const geolocation = await getGeolocation(city);

        const result = await axios(
          buildWeatherQuery(geolocation.lat, geolocation.lon)
        );
        setData({
          country: geolocation.country,
          name: geolocation.name,
          ...result.data,
        });
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    if (!city) return;

    doFetch();
  }, [city]);

  return [{ data, isLoading, isError }, setCity];
};

const buildWeatherQuery = (lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,hourly,minutely&units=metric&appid=${APIkey}`;
};
