import get from './getElement.js';
import presentDrinks from './presentDrinks.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = get('.search-form');
const input = get('[name="drink"]');

form.addEventListener('keyup', function (e) {
  e.preventDefault();
  let value = input.value;
  if (!value) {
    value = 'a';
  }
  presentDrinks(`${baseURL}${value}`);
});
