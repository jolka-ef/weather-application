import React, {useEffect} from "react";

import { Error } from "./js/components/Error.js";
import { Forecast } from "./js/components/Forecast.js";
import { Search } from "./js/components/Search.js";
import { Skeleton } from "./js/components/Skeleton.js";

import { useWeatherApi } from "./logic/fetchWeather.js";

export const App = () => {
  let [{ data, isLoading, isError }, doFetch] = useWeatherApi("");

  const onSubmit = (query) => {
    doFetch(query);
  };

  useEffect(() => {
    document.title = 'Weather Application';
  }, []);

  return (
    <>
      <Search onSubmit={onSubmit} />
      {isError && <Error />}
      {isLoading && <Skeleton />}
      {!isLoading && !isError && data && <Forecast data={data} />}
    </>
  );
};
