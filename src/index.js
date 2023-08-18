import CurrentWeather from "./components/CurrentWeather";
import ForecastDays from "./components/ForecastDays";
import getForecastWeather from "./components/getForecastWeather";
import "./styles/reset.css";
import "./styles/style.css";

const cityName = "Antananarivo";
const weatherData = await getForecastWeather(cityName);
const nowWeather = CurrentWeather(weatherData);
const forecastWeather = ForecastDays(weatherData);

console.log(nowWeather);
console.log(forecastWeather);
