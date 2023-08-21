import addPercentage from "./addPercentage";
import getTempUnit from "./getTempUnit";
import TemperatureUnits from "./tempUnits";

const displayForecast = function takeForecastDaysDataToDisplayToUI(
  forecastDays
) {
  const keys = Object.keys(forecastDays);
  keys.forEach((key) => {
    const weatherIcon = document.querySelector(`.${key} img`);
    const temperature = document.querySelector(`.${key} .value.temperature`);
    const info = document.querySelector(`.${key} .value.info-text`);
    const sunrise = document.querySelector(`.${key} .value.sunrise`);
    const sunset = document.querySelector(`.${key} .value.sunset`);
    const humidity = document.querySelector(
      `.${key} .value.humidity-percentage`
    );
    const rainChance = document.querySelector(`.${key} .value.rain-chance`);

    weatherIcon.src = forecastDays[key].icon;
    temperature.innerText =
      getTempUnit() === TemperatureUnits.CELSIUS
        ? forecastDays[key].avgTemperatureCelsius
        : forecastDays[key].avgTemperatureFahrenheit;
    info.innerText = forecastDays[key].info;
    sunrise.innerText = forecastDays[key].sunrise;
    sunset.innerText = forecastDays[key].sunset;
    humidity.innerText = addPercentage(forecastDays[key].avghumidity);
    rainChance.innerText = addPercentage(forecastDays[key].rainChance);
  });
};

export default displayForecast;
