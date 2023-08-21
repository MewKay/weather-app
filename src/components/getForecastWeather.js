const getForecastWeather = async function getForecastWeatherFromAPIWithCityName(
  cityName
) {
  const API_KEY = "2d66ee56e3944acca19215754231708";
  const NUMBER_OF_DAYS_TO_FORECAST = 3;
  const API_REQUEST_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=${NUMBER_OF_DAYS_TO_FORECAST}`;

  const response = await fetch(API_REQUEST_URL, { mode: "cors" });
  if (response.status !== 200) {
    alert(`Data for ${cityName} unavailable`);
    return null;
  }

  return response.json();
};

export default getForecastWeather;
