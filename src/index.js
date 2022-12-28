import './style.css';

import { renderUI } from './scripts/UI.js';
import { getSearchValue, setValues, changeUnits, setFavicon } from './scripts/DOMManipulation';
import { getData } from './scripts/API';

renderUI();

const form = document.querySelector("body > header > form");
form.addEventListener("submit", (e) => { 
  e.preventDefault();
  let value = getSearchValue();
  let weatherData = getData(value).then(resolve => {
    setValues(resolve);
    changeUnits(toggleSwitch.checked);
  }, reject => console.log("Error:", reject));
});

const toggleSwitch = document.querySelector("body > label > input[type=checkbox]");

toggleSwitch.addEventListener('change', (e) => {
  console.log(toggleSwitch.checked)
  changeUnits(toggleSwitch.checked);
});

setFavicon();

