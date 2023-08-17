const getCurrentWeather = async function getCurrentWeatherFromAPIWithCityName(
  cityName
) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=2d66ee56e3944acca19215754231708&q=${cityName}`,
    { mode: "cors" }
  );

  if (response.status !== 200) {
    throw new Error("Data unavailable");
  }

  return response.json();
};

export default getCurrentWeather;
