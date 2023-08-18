import CurrentWeather from "./components/CurrentWeather";
import getForecastWeather from "./components/getForecastWeather";
import "./styles/reset.css";
import "./styles/style.css";

const cityName = "Antananarivo";
const weatherData = await getForecastWeather(cityName);
const myWeather = CurrentWeather(weatherData);

console.log(weatherData);
