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
