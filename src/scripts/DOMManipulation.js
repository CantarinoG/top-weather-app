import { validateSearchValue, convertDate } from "./helper";

export function getSearchValue() {
    const searchInput = document.querySelector('input[type="search"]');
    let validatedValue = validateSearchValue(searchInput.value);
    return validatedValue;
}

export function setValues(weatherData) {

    const city = document.querySelector("body > main > h1:nth-child(1)");
    const coords = document.querySelector("body > main > h2:nth-child(2)");
    const time = document.querySelector("body > main > h2:nth-child(3)");
    const icon = document.querySelector("body > main > h2:nth-child(3)");
    const temp = document.querySelector("#temp");
    const mainWeather = document.querySelector("body > main > h1:nth-child(6)");
    const weatherDescription = document.querySelector("body > main > h2:nth-child(7)");
    const feelsLike = document.querySelector("#data-display > div:nth-child(1) > div:nth-child(1) > div.lower-card");
    const minTemp = document.querySelector("#data-display > div:nth-child(1) > div:nth-child(2) > div.lower-card");
    const maxTemp = document.querySelector("#data-display > div:nth-child(1) > div:nth-child(3) > div.lower-card");
    const cloudiness = document.querySelector("#data-display > div:nth-child(2) > div:nth-child(1) > div.lower-card");
    const windSpeed = document.querySelector("#data-display > div:nth-child(2) > div:nth-child(2) > div.lower-card");
    const visibility = document.querySelector("#data-display > div:nth-child(2) > div:nth-child(3) > div.lower-card");
    const humidity = document.querySelector("#data-display > div:nth-child(2) > div:nth-child(4) > div.lower-card");

    city.textContent = `${weatherData.name} - ${weatherData.sys.country}`;
    coords.textContent = `Lon: ${weatherData.coord.lon}° Lat: ${weatherData.coord.lat}°`;
    time.textContent = convertDate(weatherData.dt);
    let id = weatherData.weather[0].id;
}