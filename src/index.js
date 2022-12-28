import './style.css';
import { renderUI } from './scripts/UI';
import {
  getSearchValue, setValues, changeUnits, setFavicon,
} from './scripts/DOMManipulation';
import { getData } from './scripts/API';

renderUI();

const toggleSwitch = document.querySelector('body > label > input[type=checkbox]');

const form = document.querySelector('body > header > form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = getSearchValue();
  getData(value).then((resolve) => {
    setValues(resolve);
    changeUnits(toggleSwitch.checked);
  }, (reject) => alert('Error:', reject));
});

toggleSwitch.addEventListener('change', () => {
  changeUnits(toggleSwitch.checked);
});

setFavicon();