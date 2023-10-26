export const getWeekday = (timestamp, timezone) => {
  const options = { weekday: "long", timeZone: timezone };
  const date = new Date(timestamp * 1000);
  return date.toLocaleString("en-US", options);
};
