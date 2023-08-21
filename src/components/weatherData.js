import CurrentWeather from "./CurrentWeather";
import displayCurrent from "./displayCurrent";
import displayForecast from "./displayForecast";
import ForecastDays from "./ForecastDays";
import getForecastWeather from "./getForecastWeather";

const weatherData = (function weatherDataHandler() {
  let currentWeather;
  let forecastDays;

  const queryCity = async function setCityToQuery(cityName) {
    const data = await getForecastWeather(cityName);
    currentWeather = CurrentWeather(data);
    forecastDays = ForecastDays(data);
  };

  const displayData = function displayData() {
    displayCurrent(currentWeather);
    displayForecast(forecastDays);
  };

  return { queryCity, displayData };
})();

export default weatherData;
