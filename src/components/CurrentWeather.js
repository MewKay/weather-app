const epochToDate = function convertUnixTimeStampToDateObject(timeEpoch) {
  return new Date(timeEpoch * 1000);
};

const CurrentWeather = function createCurrentWeatherObject(data) {
  const {
    location,
    current: { condition, ...current },
  } = data;

  const { name: cityName, country: countryName } = location;

  return {
    cityName,
    countryName,
  };
};

export default CurrentWeather;
