import CurrentWeather from "./components/CurrentWeather";
import displayCurrent from "./components/displayCurrent";
import displayForecast from "./components/displayForecast";
import ForecastDays from "./components/ForecastDays";
import getForecastWeather from "./components/getForecastWeather";
import TemperatureUnits from "./components/tempUnits";
import "./styles/reset.css";
import "./styles/style.css";

const searchInput = document.querySelector("#city-search");
const searchButton = document.querySelector(".btn-city-search");
const toggleTemperatureButton = document.querySelector(".btn-temp-toggle");

const displayWeatherInfo = async () => {
  if (searchInput.value === "") return;
  const cityName = searchInput.value;
  const weatherData = await getForecastWeather(cityName);
  const currentWeather = CurrentWeather(weatherData);
  const forecastDays = ForecastDays(weatherData);
  displayCurrent(currentWeather);
  displayForecast(forecastDays);
};

const toggleTemperatureDisplay = (event) => {
  const { target } = event;
  target.innerText =
    target.innerText === TemperatureUnits.CELSIUS
      ? TemperatureUnits.FAHRENHEIT
      : TemperatureUnits.CELSIUS;
};

searchButton.addEventListener("click", displayWeatherInfo);
toggleTemperatureButton.addEventListener("click", toggleTemperatureDisplay);
