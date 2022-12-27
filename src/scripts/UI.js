import searchIcon from '../icons/search.svg';
import clear from '../icons/clear.svg';

export function renderUI() {
  
  const body = document.querySelector('body');
  body.innerHTML = `
  <header>
    <form action>
    <input type="search" name="search" placeholder="Search for a city...">
    <button type="submit"><img class="icon" src="${searchIcon}" alt="Search Icon"></button>
    </form>
  </header>
  <main>
    <h1>Santos Dumont - BR</h1>
    <h2>Lon: 45° Lat: 78°</h2> 
    <h2>23:45:28</h2>
    <img id="main-img" src="${clear}" alt="Clear Icon">
    <h1 id="temp">45 °C</h1>
    <h1>Sunny</h1>
    <h2>Few clouds and a lot of sunlight</h2>
  </main>
  <div id="data-display">
    <div class="row">
      <div class="card">
        <div class="upper-card">Feels Like</div>
        <div class="lower-card">21°C</div>
      </div>
      <div class="card">
        <div class="upper-card">Min Temp</div>
        <div class="lower-card">18°C</div>
      </div>
      <div class="card">
        <div class="upper-card">Max Temp</div>
        <div class="lower-card">25°C</div>
      </div>
    </div>
    <div class="row">
      <div class="card">
        <div class="upper-card">Cloudiness</div>
        <div class="lower-card">78%</div>
      </div>
      <div class="card">
        <div class="upper-card">Wind Speed</div>
        <div class="lower-card">20m/s</div>
      </div>
      <div class="card">
        <div class="upper-card">Visibility</div>
        <div class="lower-card">8000m</div>
      </div>
      <div class="card">
        <div class="upper-card">Humidity</div>
        <div class="lower-card">78%</div>
      </div>
    </div>
  </div>
  `;

}
