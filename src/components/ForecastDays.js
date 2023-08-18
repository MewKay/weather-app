import ForecastDay from "./ForecastWeather";

const ForecastDays = function createForecastListofDays(data) {
  const { forecastday } = data.forecast;
  const today = ForecastDay(forecastday[0]);
  const tomorrow = ForecastDay(forecastday[1]);
  const overmorrow = ForecastDay(forecastday[2]);

  return {
    today,
    tomorrow,
    overmorrow,
  };
};

export default ForecastDays;
