import CurrentWeather from "./components/CurrentWeather";
import ForecastDays from "./components/ForecastDays";
import getForecastWeather from "./components/getForecastWeather";
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
  console.log(currentWeather);
  console.log(forecastDays);
};

const toggleTemperatureDisplay = (event) => {
  const { target } = event;
  target.innerText = target.innerText === "°C" ? "°F" : "°C";
};

searchButton.addEventListener("click", displayWeatherInfo);
toggleTemperatureButton.addEventListener("click", toggleTemperatureDisplay);
