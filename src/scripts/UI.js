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
    <h1>SELECT A CITY</h1>
    <h2>Lon:- Lat:- </h2> 
    <img id="main-img" src="${clear}" alt="Clear Icon">
    <h1 id="temp">-</h1>
    <h1>-</h1>
    <h2>-</h2>
  </main>
  <div id="data-display">
    <div class="row">
      <div class="card">
        <div class="upper-card">Feels Like</div>
        <div class="lower-card">-</div>
      </div>
      <div class="card">
        <div class="upper-card">Min Temp</div>
        <div class="lower-card">-</div>
      </div>
      <div class="card">
        <div class="upper-card">Max Temp</div>
        <div class="lower-card">-</div>
      </div>
    </div>
    <div class="row">
      <div class="card">
        <div class="upper-card">Cloudiness</div>
        <div class="lower-card">-</div>
      </div>
      <div class="card">
        <div class="upper-card">Wind Speed</div>
        <div class="lower-card">-</div>
      </div>
      <div class="card">
        <div class="upper-card">Visibility</div>
        <div class="lower-card">-</div>
      </div>
      <div class="card">
        <div class="upper-card">Humidity</div>
        <div class="lower-card">-</div>
      </div>
    </div>
  </div>

<label class="switch">
  <input type="checkbox">
  <span class="slider"></span>
</label>
  `;

}
