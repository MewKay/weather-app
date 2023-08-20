const ForecastDay = function createForecastOfOneDay(data) {
  const {
    astro,
    day: { condition, ...day },
  } = data;

  const { sunrise, sunset } = astro;

  const info = condition.text;
  const { icon } = condition;

  const rainChance = day.daily_chance_of_rain;

  const { avghumidity } = day;
  const avgTemperatureCelsius = `${day.avgtemp_c}°C`;
  const avgTemperatureFahrenheit = `${day.avgtemp_f}°F`;

  return {
    sunrise,
    sunset,
    info,
    icon,
    rainChance,
    avghumidity,
    avgTemperatureCelsius,
    avgTemperatureFahrenheit,
  };
};

export default ForecastDay;
