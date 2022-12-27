import './style.css';

import { renderUI } from './scripts/UI.js';
import { getSearchValue, setValues } from './scripts/DOMManipulation';
import { getData } from './scripts/API';

renderUI();

const form = document.querySelector("body > header > form");
form.addEventListener("submit", (e) => { 
  e.preventDefault();
  let value = getSearchValue();
  let weatherData = getData(value).then(resolve => {
    setValues(resolve);
  }, reject => console.log("Error:", reject));
});

