import React from "react";
import { getSpeedInKmph } from "../../utils/getSpeedInKmph.js";
import { getWeekday } from "../../utils/getWeekday.js";
import { getWeatherIcon } from "../../utils/getWeatherIconComponent.js";
import "../../css/components/TodaysWeather.css";

export const TodaysWeather = ({ data }) => {
  const { country, name, timezone } = data;
  const { dt, humidity, temp, weather, wind_speed } = data.current;
  let { main: description } = data.current.weather[0];
  const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
    type: "region",
  });

  return (
    <>
      <h2 className="TodaysWeather-heading">
        {`${name}, ${regionNamesInEnglish.of(country)}`}
      </h2>

      <dl className="TodaysWeather">
        <dt className="VisuallyHidden">Wheather Image</dt>
        <dd className="TodaysWeather-icon">
          {getWeatherIcon(weather[0].icon)}
        </dd>

        <dt className="VisuallyHidden">Temperature</dt>
        <dd className="TodaysWeather-temperature">{Math.round(temp)}</dd>

        <div className="TodaysWeather-info">
          <dt className="VisuallyHidden">Day Of Week</dt>
          <dd className="TodaysWeather-dayOfWeek">
            {getWeekday(dt, timezone)}
          </dd>

          <dt className="VisuallyHidden">Weather description</dt>
          <dd className="TodaysWeather-description">{description}</dd>
        </div>

        <div className="TodaysWeather-humidity">
          <dt>Humidity :</dt>
          <dd>{humidity}%</dd>
        </div>

        <div className="TodaysWeather-wind">
          <dt>Wind :</dt>
          <dd>{getSpeedInKmph(wind_speed)} km/h</dd>
        </div>
      </dl>
    </>
  );
};
