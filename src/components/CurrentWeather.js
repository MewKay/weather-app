// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from "date-fns";

const epochToDate = function convertUnixTimeStampToDateObject(timeEpoch) {
  return new Date(timeEpoch * 1000);
};

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

  const localDate = epochToDate(location.localtime_epoch);
  const date = getFormattedDate(localDate);
  const time = getFormattedTime(localDate);

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
