import './style.css';

import { renderUI } from './scripts/UI.js';

renderUI();

// TEST
/*
const city = 'London';

function buildRequestCoordsUrl(cityName) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=20f7632ffc2c022654e4093c6947b4f4&units=metric`;
}

async function getData(url) {
  const response = await fetch(url);
  // console.log(response);
  if (response.ok) {
    const weatherData = await response.json();
    console.log(weatherData);
    console.log('Name', weatherData.name);
    console.log('Country', weatherData.sys.country);
    console.log('Time(UNIX)', weatherData.dt);
    console.log('Cloudiness(%)', weatherData.clouds.all);
    console.log('Wind speed(m/sec)', weatherData.wind.speed);
    console.log('Visibility (meter)', weatherData.visibility);
    console.log('Temperature(Celsius)', weatherData.main.temp);
    console.log('Temperature feels like(Celsius)', weatherData.main.feels_like);
    console.log('Humidity(%)', weatherData.main.humidity);
    console.log('Min temp(Celsius)', weatherData.main.temp_min);
    console.log('Max tempo(Celsius)', weatherData.main.temp_max);
    console.log('Weather id', weatherData.weather[0].id);
    console.log('Weather main condition', weatherData.weather[0].main);
    console.log('Weather description', weatherData.weather[0].description);
    console.log('Longitude', weatherData.coord.lon);
    console.log('Latitude', weatherData.coord.lat);

    return weatherData; // data is here
    // console.log(coord);
  }

  alert("Couldn't access weather data");
}

getData(buildRequestCoordsUrl(city));
*/

/*

Weather categories:
Cloudy 7xx 80x
Rainy 2xx, 3xx, 5xx
Clean 800
Snowy 6xx


*/


