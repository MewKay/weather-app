import CurrentWeather from "./components/CurrentWeather";
import getCurrentWeather from "./components/getCurrentWeather";
import getForecastWeather from "./components/getForecastWeather";
import "./styles/reset.css";
import "./styles/style.css";

const cityName = "Antananarivo";
const weatherData = await getCurrentWeather(cityName);
const futureData = await getForecastWeather(cityName);
const myWeather = CurrentWeather(weatherData);

console.log(weatherData);
console.log(futureData);
