import addPercentage from "./addPercentage";
import getTempUnit from "./getTempUnit";
import TemperatureUnits from "./tempUnits";

const weatherIcon = document.querySelector(".current img");
const temperature = document.querySelector(".current .value.temperature");
const info = document.querySelector(".current .value.info-text");
const humidity = document.querySelector(".current .value.humidity-percentage");
const cloud = document.querySelector(".current .value.cloud-percentage");
const city = document.querySelector(".current .value.city");
const country = document.querySelector(".current .value.country");
const date = document.querySelector(".current .value.date");
const time = document.querySelector(".current .value.time");

const displayCurrent = function takeCurrenWeatherDataToDisplayToUI(
  CurrentWeather
) {
  weatherIcon.src = CurrentWeather.icon;
  temperature.innerText =
    getTempUnit() === TemperatureUnits.CELSIUS
      ? CurrentWeather.temperatureCelsius
      : CurrentWeather.temperatureFahrenheit;
  info.innerText = CurrentWeather.info;
  humidity.innerText = addPercentage(CurrentWeather.humidity);
  cloud.innerText = addPercentage(CurrentWeather.cloud);
  city.innerText = CurrentWeather.cityName;
  country.innerText = CurrentWeather.countryName;
  date.innerText = CurrentWeather.date;
  time.innerText = CurrentWeather.time;
};

export default displayCurrent;
