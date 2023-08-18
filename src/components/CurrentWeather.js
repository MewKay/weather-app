// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from "date-fns";

const epochToDate = function convertUnixTimeStampToDateObject(timeEpoch) {
  return new Date(timeEpoch * 1000);
};

const getFormattedDate = function formatDateToConvenientPattern(date) {
  return format(date, "EEEE do MMMM yyyy");
};

const getFormattedTime = function formatDateToGetTheTimeHourAndMinute(date) {
  return format(date, "hh:mm aaa");
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

  const temperatureCelsius = current.feelslike_c;
  const temperatureFahrenheit = current.feelslike_f;

  const info = condition.text;
  const { icon } = condition;

  const { humidity } = current;
  const { cloud } = current;

  const daytime = current.is_day === 1;

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
    daytime,
  };
};

export default CurrentWeather;
