import { validateSearchValue } from "./helper";

import clear from '../icons/clear.svg';
import cloudy from '../icons/cloudy.svg';
import rainy from '../icons/rainy.svg';
import snowy from '../icons/snowy.svg';

export function getSearchValue() {
    const searchInput = document.querySelector('input[type="search"]');
    let validatedValue = validateSearchValue(searchInput.value);
    return validatedValue;
}

export function setValues(weatherData) {

    const body = document.querySelector('body');
    const city = document.querySelector("body > main > h1:nth-child(1)");
    const coords = document.querySelector("body > main > h2:nth-child(2)");
    const icon = document.querySelector("#main-img")
    const temp = document.querySelector("#temp");
    const mainWeather = document.querySelector("body > main > h1:nth-child(5)")
    const weatherDescription = document.querySelector("body > main > h2:nth-child(6)")
    const feelsLike = document.querySelector("#data-display > div:nth-child(1) > div:nth-child(1) > div.lower-card");
    const minTemp = document.querySelector("#data-display > div:nth-child(1) > div:nth-child(2) > div.lower-card");
    const maxTemp = document.querySelector("#data-display > div:nth-child(1) > div:nth-child(3) > div.lower-card");
    const cloudiness = document.querySelector("#data-display > div:nth-child(2) > div:nth-child(1) > div.lower-card");
    const windSpeed = document.querySelector("#data-display > div:nth-child(2) > div:nth-child(2) > div.lower-card");
    const visibility = document.querySelector("#data-display > div:nth-child(2) > div:nth-child(3) > div.lower-card");
    const humidity = document.querySelector("#data-display > div:nth-child(2) > div:nth-child(4) > div.lower-card");

    city.textContent = `${weatherData.name} - ${weatherData.sys.country}`;
    coords.textContent = `Lon: ${weatherData.coord.lon}° Lat: ${weatherData.coord.lat}°`;
    let id = weatherData.weather[0].id.toString();
    if(id == 800) {
        icon.src = clear;
        document.body.style.backgroundColor = "rgb(216, 233, 141)";
    } else if(id.startsWith('6')){
        icon.src = snowy;
        document.body.style.backgroundColor = "rgb(238, 238, 238)";
    } else if(id.startsWith('2') || id.startsWith('3') || id.startsWith('5')){
        icon.src = rainy;
        document.body.style.backgroundColor = "rgb(42, 37, 66)";
    } else if(id.startsWith('7') || id.startsWith('80')){
        icon.src = cloudy;
        document.body.style.backgroundColor = "rgb(152, 150, 166)";
    } else {
        alert('Something went wrong. Please try again.');
    }
    temp.textContent = `${Math.round(weatherData.main.temp)}°C`;
    mainWeather.textContent = weatherData.weather[0].main;
    weatherDescription.textContent = weatherData.weather[0].description;
    feelsLike.textContent = `${Math.round(weatherData.main.feels_like)}°C`;
    minTemp.textContent = `${Math.round(weatherData.main.temp_min)}°C`;
    maxTemp.textContent = `${Math.round(weatherData.main.temp_max)}°C`;
    cloudiness.textContent = `${weatherData.clouds.all}%`;
    windSpeed.textContent = `${weatherData.wind.speed}m/sec`;
    visibility.textContent = `${weatherData.visibility}m`;
    humidity.textContent = `${weatherData.main.humidity}%`;


}