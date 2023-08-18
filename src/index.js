import getCurrentWeather from "./components/getCurrentWeather";
import "./styles/reset.css";
import "./styles/style.css";

const weatherData = await getCurrentWeather("Antananarivo");
console.log(weatherData);
