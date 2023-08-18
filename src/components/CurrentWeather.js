import { format } from "date-fns";

const epochToDate = function convertUnixTimeStampToDateObject(timeEpoch) {
  return new Date(timeEpoch * 1000);
};

const getFormattedDate = function formatDateToConvenientPattern(date) {
  return format(date, "EEEE do MMMM yyyy");
};

const CurrentWeather = function createCurrentWeatherObject(data) {
  const {
    location,
    current: { condition, ...current },
  } = data;
  const { name: cityName, country: countryName } = location;
  const localDate = epochToDate(location.localtime_epoch);
  const date = getFormattedDate(localDate);

  return {
    cityName,
    countryName,
    date,
  };
};

export default CurrentWeather;
