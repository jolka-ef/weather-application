export const getSpeedInKmph = (speedInMps) => {
  return Math.round((18 / 5) * speedInMps);
};
