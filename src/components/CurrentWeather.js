const epochToDate = function convertUnixTimeStampToDateObject(timeEpoch) {
  return new Date(timeEpoch * 1000);
};

const CurrentWeather = function createCurrentWeatherObject(data) {
  const {
    location,
    current: { condition, ...current },
  } = data;
  const { name: cityName, country: countryName } = location;
  const localDate = epochToDate(location.localtime_epoch);

  return {
    cityName,
    countryName,
    localDate,
  };
};

export default CurrentWeather;
