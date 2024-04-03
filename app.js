import { Github } from './scripts/api.js';
import { elements } from './scripts/helpers.js';

const github = new Github();

const getInput = (e) => {
  e.preventDefault();
  const value = elements.searchInput.value;
  console.log('tiklanildi');
  if (value === '') return;
  if (value) {
    github.fetchUserData(value);
  }
};
elements.searchBtn.addEventListener('click', getInput);
