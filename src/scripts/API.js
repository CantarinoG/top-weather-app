function buildRequestURL(cityName) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=20f7632ffc2c022654e4093c6947b4f4&units=metric`;
}

export async function getData(cityName) {
  const url = buildRequestURL(cityName);
  const response = await fetch(url);
  if (response.ok) {
    const weatherData = await response.json();
    return weatherData;
  }
  alert('Something went wrong with your request. Please try again.');
  return null;
}