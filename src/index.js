import CurrentWeather from "./components/CurrentWeather";
import getCurrentWeather from "./components/getCurrentWeather";
import "./styles/reset.css";
import "./styles/style.css";

const weatherData = await getCurrentWeather("Antananarivo");
const myWeather = CurrentWeather(weatherData);

console.log(myWeather);
