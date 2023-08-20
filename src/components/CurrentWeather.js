import { format, fromUnixTime } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

const getFormattedDate = function formatDateToConvenientPattern(date) {
  return format(date, "EEEE do MMMM yyyy");
};

const getFormattedTime = function formatDateToGetTheTimeHourAndMinute(date) {
  return format(date, "p");
};

const CurrentWeather = function createCurrentWeatherObject(data) {
  const {
    location,
    current: { condition, ...current },
  } = data;

  const { name: cityName, country: countryName } = location;

  const localDate = fromUnixTime(location.localtime_epoch);
  const zonedDate = utcToZonedTime(localDate, location.tz_id);
  const date = getFormattedDate(zonedDate);
  const time = getFormattedTime(zonedDate);

  const temperatureCelsius = `${Math.round(current.feelslike_c)}°C`;
  const temperatureFahrenheit = `${Math.round(current.feelslike_f)}°F`;

  const info = condition.text;
  const { icon } = condition;

  const { humidity } = current;
  const { cloud } = current;

  return {
    cityName,
    countryName,
    date,
    time,
    temperatureCelsius,
    temperatureFahrenheit,
    info,
    icon,
    humidity,
    cloud,
  };
};

export default CurrentWeather;
