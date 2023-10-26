import React from "react";
import { getWeekday } from "../../utils/getWeekday.js";
import { getWeatherIcon } from "../../utils/getWeatherIconComponent.js";

import "../../css/components/DailyForecast.css";

export const DailyForecast = ({ data }) => {
  let { daily, timezone } = data;
  daily = daily.slice(1, 6);
  return (
    <dl className="DailyForecastList">
      {daily.map((day) => (
        <div key={day.dt} className="DailyForecastList-item">
          <dt>{getWeekday(day.dt, timezone)}</dt>
          <dd>{getWeatherIcon(day.weather[0].icon)}</dd>
          <div className="DailyTemperatures">
            <dd>{Math.round(day.temp.max)}</dd>
            <dd>{Math.round(day.temp.min)}</dd>
          </div>
        </div>
      ))}
    </dl>
  );
};
