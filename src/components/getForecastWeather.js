const getForecastWeather = async function getForecastWeatherFromAPIWithCityName(
  cityName
) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=2d66ee56e3944acca19215754231708&q=${cityName}&days=3`,
    { mode: "cors" }
  );

  if (response.status !== 200) {
    throw new Error("Data Unavailable");
  }

  return response.json();
};

export default getForecastWeather;
