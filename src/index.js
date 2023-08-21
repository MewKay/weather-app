import TemperatureUnits from "./components/tempUnits";
import weatherData from "./components/weatherData";
import "./styles/reset.css";
import "./styles/style.css";

const searchButton = document.querySelector(".btn-city-search");
const toggleTemperatureButton = document.querySelector(".btn-temp-toggle");

const displayWeatherInfo = async () => {
  const searchInput = document.querySelector("#city-search");
  if (searchInput.value === "") return;
  const cityName = searchInput.value;
  weatherData.queryCity(cityName);
  weatherData.displayData();
};

const toggleTemperatureDisplay = (event) => {
  const { target } = event;
  target.innerText =
    target.innerText === TemperatureUnits.CELSIUS
      ? TemperatureUnits.FAHRENHEIT
      : TemperatureUnits.CELSIUS;
  weatherData.displayData();
};

searchButton.addEventListener("click", displayWeatherInfo);
toggleTemperatureButton.addEventListener("click", toggleTemperatureDisplay);
