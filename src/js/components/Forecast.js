import React from "react";

import { TodaysWeather } from "./TodaysWeather.js";
import { DailyForecast } from "./DailyForecast.js";

export const Forecast = ({ data }) => {
  return (
    <article>
      <TodaysWeather data={data} />
      <DailyForecast data={data} />
    </article>
  );
};
